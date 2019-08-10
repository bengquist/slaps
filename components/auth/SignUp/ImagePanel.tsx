import React from "react";
import * as Auth from "../styles";
import Dropzone from "../../ui/Dropzone";

type Props = {
  onContinue: () => void;
};

function ImagePanel({ onContinue }: Props) {
  return (
    <Auth.Panel
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Auth.Form>
        <Auth.FormBody>
          <Auth.Title>PROFILE IMAGE</Auth.Title>
          <Dropzone />
          <Auth.Button type="submit">UPLOAD</Auth.Button>
        </Auth.FormBody>
      </Auth.Form>
    </Auth.Panel>
  );
}

export default ImagePanel;
