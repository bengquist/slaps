import React, { useState } from "react";
import * as Auth from "./styles";
import SignUpPanel from "./SignUpPanel";

function SignUp() {
  const [step, setStep] = useState(0);

  function renderSteps() {
    switch (step) {
      case 0:
        return <SignUpPanel />;
      default:
        return null;
    }
  }

  return <Auth.Container>{renderSteps()}</Auth.Container>;
}

export default SignUp;
