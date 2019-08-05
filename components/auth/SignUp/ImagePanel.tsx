import React from "react";
import * as Auth from "../styles";
import * as firebase from "firebase/app";

type Props = {
  onContinue: () => void;
};

function ImagePanel({ onContinue }: Props) {
  const storage = firebase.storage();

  return (
    <Auth.Panel
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Auth.Title>PROFILE IMAGE</Auth.Title>
      <Auth.Form>
        <Auth.Button type="submit">UPLOAD</Auth.Button>
      </Auth.Form>
    </Auth.Panel>
  );
}

export default ImagePanel;
