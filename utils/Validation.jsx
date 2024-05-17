export const validateSignUp = ({
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

export const validateLogin = ({ email, password, setErrors }) => {
  let isValid = true;
  const newError = { email: "", password: "" };

  if (!email) {
    newError.email = "Can't be empty";
    isValid = false;
  }
  if (!password) {
    newError.password = "Please check again";
    isValid = false;
  }

  setErrors(newError);
  return isValid;
};

export const validateProfileDetails = ({
  email,
  setErrors,
  firstName,
  lastName,
}) => {
  let isValid = true;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let newError = { firstName: "", lastName: "", email: "" };

  if (!firstName) {
    isValid = false;
    newError.firstName = "Can't be empty";
  }
  if (!lastName) {
    isValid = false;
    newError.lastName = "Can't be empty";
  }
  if (!email) {
    isValid = false;
    newError.email = "Can't be empty";
  } else if (!emailPattern.test(email)) {
    isValid = false;
    newError.email = "Invalid email";
  }

  setErrors(newError);
  return isValid;
};

const urlValidationRules = {
  Github: "https://www.github.com/",
  "Frontend mentor": "https://www.frontendmentor.io/profile/",
  Twitter: "https://www.twitter.com/",
  LinkedIn: "https://www.linkedin.com/in/",
  Youtube: "https://www.youtube.com/",
  Facebook: "https://www.facebook.com/",
  Twitch: "https://www.twitch.tv/",
  "Dev.to": "https://www.dev.to/",
  Codewars: "https://www.codewars.com/users/",
  Codepen: "https://www.codepen.io/",
  freeCodeCamp: "https://www.freecodecamp.org/",
  Gitlab: "https://www.gitlab.com/",
  "Stack overflow": "https://www.stackoverflow.com/users/",
  Hashnode: "https://www.hashnode.com/@",
};

const validateUrl = (platform, url) => {
  if (!url) {
    return { isValid: false, message: "The link cannot be empty." };
  }
  if (platform && urlValidationRules[platform]) {
    return url.startsWith(urlValidationRules[platform])
      ? { isValid: true, message: "" }
      : {
          isValid: false,
          message: `Please Check the URL`,
        };
  }
  return { isValid: true, message: "" };
};

export default validateUrl;
