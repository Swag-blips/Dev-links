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
