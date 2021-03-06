import  * as Auth from "../styles/styles"; 
import React, { useEffect, useState } from "react";
import CreatePanel from "./CreatePanel";
import ImagePanel from "./ImagePanel";
import InfoPanel from "./InfoPanel";
import ProgressBar from "../../ui/ProgressBar";

function SignUp() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    switch (step) {
      case 2:
        setProgress(20);
        break;
      case 3:
        setProgress(40);
        break;
      default:
        setProgress(60);
    }
  }, [step]);

  const goForward = () => setStep(step + 1);
  const goBack = () => setStep(step - 1);

  function renderSteps() {
    switch (step) {
      case 1:
        return <CreatePanel onSignUp={goForward} />;
      case 2:
        return <InfoPanel onContinue={goForward} onBack={goBack} />;
      case 3:
        return <ImagePanel onContinue={goForward} onBack={goBack} />;
      default:
        return null;
    }
  }

  return (
    <Auth.Container>
      <>
        {step !== 1 && (
          <ProgressBar
            style={{ maxWidth: 400, marginBottom: "2rem" }}
            progress={progress}
          />
        )}
        {renderSteps()}
      </>
    </Auth.Container>
  );
}

export default SignUp;
