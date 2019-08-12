import * as Auth from "../styles/styles";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Dropzone from "../../ui/Dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_ME } from "../query";
import Router from "next/router";
import { UPDATE_USER } from "../mutation";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { preventDefault } from "../../../lib/eventHelpers";
import { storage } from "../../../lib/firebase.config";

type Props = {
  onContinue: () => void;
  onBack: () => void;
};

function ImagePanel({ onContinue, onBack }: Props) {
  const user = useQuery(GET_ME);
  const [toggleUpdateUser] = useMutation(UPDATE_USER, {
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
    if (image.name) {
      const mainImage = storage.ref().child(image.name);

      await mainImage.put(image);

      const imageUrl = await mainImage.getDownloadURL();

      await toggleUpdateUser({
        variables: {
          image: imageUrl
        }
      });
    }

    Router.replace("/");
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
          <Auth.Button type="submit">FINISH</Auth.Button>
        </Auth.FormBody>
      </Auth.Form>
    </Auth.Panel>
  );
}

export default ImagePanel;
