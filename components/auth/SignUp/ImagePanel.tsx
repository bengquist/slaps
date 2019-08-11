import React, { useState } from "react";
import * as Auth from "../styles/styles";
import Dropzone from "../../ui/Dropzone";
import { preventDefault } from "../../../lib/eventHelpers";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storage } from "../../../lib/firebase.config";

type Props = {
  onContinue: () => void;
  onBack: () => void;
};

function ImagePanel({ onContinue, onBack }: Props) {
  const [image, setImage] = useState();

  function uploadHandler() {
    onContinue();
  }

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
            onFileAdded={(file: File) => setImage(URL.createObjectURL(file))}
            image={image}
          />
          <Auth.Button type="submit">CONTINUE</Auth.Button>
        </Auth.FormBody>
      </Auth.Form>
    </Auth.Panel>
  );
}

export default ImagePanel;
