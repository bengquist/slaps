import React, { useState, useEffect } from "react";
import * as Auth from "../styles/styles";
import Dropzone from "../../ui/Dropzone";
import { preventDefault } from "../../../lib/eventHelpers";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storage } from "../../../lib/firebase.config";
import { GET_ME } from "../query";
import { useQuery, useMutation } from "react-apollo-hooks";
import { UPDATE_USER } from "../mutation";

type Props = {
  onContinue: () => void;
  onBack: () => void;
};

function ImagePanel({ onContinue, onBack }: Props) {
  const user = useQuery(GET_ME);
  const toggleUpdateUser = useMutation(UPDATE_USER, {
    update: (proxy, { data }) => {
      const userData = proxy.readQuery({ query: GET_ME });

      userData.me = data.updateUser;
    }
  });

  const [image, setImage] = useState();

  useEffect(() => {
    if (user.data.me) {
      setImage(user.data.me.image);
    }
  }, [user]);

  async function uploadHandler() {
    const mainImage = storage.ref().child(image.name);

    await mainImage.put(image);

    const imageUrl = await mainImage.getDownloadURL();

    await toggleUpdateUser({
      variables: {
        image: imageUrl
      }
    });

    onContinue();
  }

  const imageUrl = image && image.name ? URL.createObjectURL(image) : image;

  return (
    <Auth.Panel
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Auth.Form onSubmit={preventDefault(uploadHandler)}>
        <Auth.FormBody>
          <Auth.TitleContainer>
            <Auth.BackButton type="button" onClick={onBack}>
              <FontAwesomeIcon icon={faChevronLeft} /> BACK
            </Auth.BackButton>
            <Auth.Title>PROFILE IMAGE</Auth.Title>
          </Auth.TitleContainer>
          <Dropzone
            onFileAdded={(file: File) => setImage(file)}
            image={imageUrl}
          />
          <Auth.Button type="submit">CONTINUE</Auth.Button>
        </Auth.FormBody>
      </Auth.Form>
    </Auth.Panel>
  );
}

export default ImagePanel;
