export const validateForm = ({
  setErrors,
  email,
  password,
  confirmPassword,
}) => {
  let formIsValid = true;
  const newErrors = { email: "", password: "", confirmPassword: "" };

  if (!email) {
    newErrors.email = "Cant be empty";
    formIsValid = false;
  }
  if (!password) {
    newErrors.password = "Please check again";
    formIsValid = false;
  }
  if (!confirmPassword) {
    newErrors.confirmPassword = "Please check again";
    formIsValid = false;
  }
  if (password && confirmPassword && password !== confirmPassword) {
    newErrors.confirmPassword = "passwords do not match";
    formIsValid = false;
  }

  setErrors(newErrors);
  return formIsValid;
};
