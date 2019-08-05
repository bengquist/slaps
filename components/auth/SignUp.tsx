import React, { useState } from "react";
import * as Auth from "./styles";
import SignUpPanel from "./SignUpPanel";
import InfoPanel from "./InfoPanel";

function SignUp() {
  const [step, setStep] = useState(2);

  function renderSteps() {
    switch (step) {
      case 1:
        return <SignUpPanel onSignUp={() => setStep(2)} />;
      case 2:
        return <InfoPanel onContinue={() => setStep(3)} />;
      default:
        return null;
    }
  }

  return <Auth.Container>{renderSteps()}</Auth.Container>;
}

export default SignUp;
