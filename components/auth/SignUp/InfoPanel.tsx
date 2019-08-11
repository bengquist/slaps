import React from "react";
import * as Auth from "../styles/styles";
import useFormValidation from "../../hooks/useFormValidation";
import { validateSignUp } from "../helpers";
import { useMutation } from "react-apollo-hooks";
import Cookie from "js-cookie";
import { SIGN_UP } from "../mutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import AuthInput from "../styles/AuthInput";

type Props = {
  onContinue: () => void;
  onBack: () => void;
};

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  location: "",
  bio: ""
};

function InfoPanel({ onContinue, onBack }: Props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateSignUp, submitHandler);

  async function submitHandler() {
    onContinue();
  }

  return (
    <Auth.Panel
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Auth.Form onSubmit={handleSubmit}>
        <Auth.FormBody>
          <Auth.TitleContainer>
            <Auth.BackButton type="button" onClick={onBack}>
              <FontAwesomeIcon icon={faChevronLeft} /> BACK
            </Auth.BackButton>
            <Auth.Title>INFO</Auth.Title>
          </Auth.TitleContainer>
          <Auth.Label>
            <p>First Name</p>
            <AuthInput
              name="firstName"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
            />
          </Auth.Label>
          <Auth.Label>
            <p>Last Name</p>
            <AuthInput
              name="lastName"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
            />
          </Auth.Label>
          <Auth.Label>
            <p>Location</p>
            <AuthInput
              name="location"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.location}
            />
          </Auth.Label>
          <Auth.Label>
            <p>Bio</p>
            <Auth.TextArea
              name="bio"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.bio}
              rows={6}
            />
          </Auth.Label>
        </Auth.FormBody>

        <Auth.Button type="submit" disabled={isSubmitting}>
          CONTINUE
        </Auth.Button>
      </Auth.Form>
    </Auth.Panel>
  );
}

export default InfoPanel;