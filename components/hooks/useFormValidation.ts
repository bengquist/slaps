import { useState, useEffect, FormEvent } from "react";

function useFormValidation(
  initialState: any,
  onSubmit: () => void,
  validate?: (values: any) => any
) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [isSubmitting, setSubmitting] = useState(false);
  const [focusList, setFocusList] = useState<string[]>([]);

  useEffect(() => {
    setValues(initialState);
    setErrors(initialState);
  }, [initialState]);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        console.error("Something went wrong!");
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  function handleBlur(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const validationErrors = validate ? validate(values) : {};
    setFocusList([...focusList, event.currentTarget.name]);

    const filteredErrors: any = {};

    for (const error in validationErrors) {
      if (focusList.includes(error) || error === event.currentTarget.name) {
        filteredErrors[error] = validationErrors[error];
      }
    }

    setErrors(filteredErrors);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);

    setSubmitting(true);

    if (Object.values(validationErrors).every(value => value === "")) {
      await onSubmit();
    }

    setSubmitting(false);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;
