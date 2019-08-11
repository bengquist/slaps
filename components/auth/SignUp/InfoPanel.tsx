import React from "react";
import * as Auth from "../styles/styles";
import useFormValidation from "../../hooks/useFormValidation";
import { useMutation, useQuery } from "react-apollo-hooks";
import { UPDATE_USER } from "../mutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import AuthInput from "../styles/AuthInput";
import { GET_ME } from "../query";

type Props = {
  onContinue: () => void;
  onBack: () => void;
};

function InfoPanel({ onContinue, onBack }: Props) {
  const user = useQuery(GET_ME);
  const toggleUpdateUser = useMutation(UPDATE_USER, {
    update: (proxy, { data }) => {
      const userData = proxy.readQuery({ query: GET_ME });

      userData.me = data.updateUser;

      proxy.writeQuery({ query: GET_ME, data });
    }
  });

  const INITIAL_STATE = user.data.me || {
    firstName: "",
    lastName: "",
    location: "",
    bio: ""
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, submitHandler);

  async function submitHandler() {
    console.log(values.firstName, values.lastName, values.location, values.bio);
    await toggleUpdateUser({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        location: values.location,
        bio: values.bio
      }
    });

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
