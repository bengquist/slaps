import React, { useState } from "react";
import * as Auth from "../styles";
import CreatePanel from "./CreatePanel";
import InfoPanel from "./InfoPanel";
import ImagePanel from "./ImagePanel";

function SignUp() {
  const [step, setStep] = useState(1);

  function renderSteps() {
    switch (step) {
      case 1:
        return <CreatePanel onSignUp={() => setStep(2)} />;
      case 2:
        return <InfoPanel onContinue={() => setStep(3)} />;
      case 3:
        return <ImagePanel onContinue={() => setStep(4)} />;
      default:
        return null;
    }
  }

  return <Auth.Container>{renderSteps()}</Auth.Container>;
}

export default SignUp;
