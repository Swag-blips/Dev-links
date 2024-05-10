import React, { useState } from "react";
import logo from "../../assets/images/logo-devlinks-large.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import { Link } from "react-router-dom";
import { signup } from "../../../helpers/Auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../../utils/ErrorHandler";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (password === confirmPassword) {
          toast.promise(signup(email, password), {
            loading: "signing up...",
            success: () => {
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              return "Account created successfully";
              navigate.to("/");
            },
            error: (err) => getErrorMessage(err),
          });
        } else {
          setErrors({ ...errors, confirmPassword: "Passwords do not match" });
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const handleInputChange = (fieldName, value) => {
    // Update the field value
    if (fieldName === "email") setEmail(value);
    else if (fieldName === "password") setPassword(value);
    else if (fieldName === "confirmPassword") setConfirmPassword(value);

    // Clear the error for this field
    setErrors({ ...errors, [fieldName]: "" });
  };

  const inputStyle = (fieldName) => {
    return `border ${
      errors[fieldName] ? "border-[#FF3939]" : "border-[#D9D9D9]"
    } px-4 outline-none py-3 rounded-[8px] pl-[40px] pr-[100px] w-full focus-within:border-[#633CFF] focus:border-[1px] focus:shadow-[0_0_8px_2px_rgba(99,60,255,0.6)]`;
  };

  const labelStyle = (fieldName) => {
    return `text-[12px] ${
      errors[fieldName] ? "text-[#FF3939]" : "text-[#333333]"
    } `;
  };

  return (
    <div className="md:flex md:justify-center md:flex-col md:items-center h-screen rounded-[12px]">
      <div className="hidden md:block mt-[32px] ml-[32px]">
        <img src={logo} alt="DevLinks Logo" />
      </div>
      <main className="bg-[#fff] md:w-[476px] md:mt-[51px] md:h-[618px] p-[1px] h-screen">
        <div className="md:hidden mt-[32px] ml-[32px]">
          <img src={logo} alt="DevLinks Logo" />
        </div>
        <div className="mt-[64px] md:mt-[40px] ml-[32px] mr-[32px]">
          <div className="flex justify-center gap-[8px] flex-col">
            <h2 className="font-bold text-[24px]">Create account</h2>
            <p className="text-[16px] font-regular text-[#737373]">
              Let’s get you started sharing your links!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-[40px] flex flex-col justify-center gap-[24px]"
          >
            <div className="flex justify-center flex-col gap-[4px] text-[#333333]">
              <label htmlFor="email" className={labelStyle("email")}>
                Email address
              </label>
              <div className="relative">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g. alex@email.com"
                  className={inputStyle("email")}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                {errors.email && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-xs">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-center flex-col gap-[4px] text-[#333333]">
              <label htmlFor="password" className={labelStyle("password")}>
                Create password
              </label>
              <div className="relative">
                <img
                  src={passwordIcon}
                  alt="Password Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At least 8 characters"
                  className={inputStyle("password")}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />
                {errors.password && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-xs">
                    {errors.password}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-center flex-col gap-[4px] text-[#333333]">
              <label
                htmlFor="confirmPassword"
                className={labelStyle("confirmPassword")}
              >
                Confirm password
              </label>
              <div className="relative">
                <img
                  src={passwordIcon}
                  alt="Password Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="At least 8 characters"
                  className={inputStyle("confirmPassword")}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                />
                {errors.confirmPassword && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-xs">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#633CFF] px-[27px] hover:bg-[#BEADFF] py-[11px] rounded-[8px] text-[12px] text-[#fff]"
            >
              Create new account
            </button>

            <div className="text-center md:flex md:items-center md:justify-center gap-[3px] ">
              <p className="text-[#737373]">Already have an account?</p>
              <Link to="/login">
                <p className="text-[#633CFF]">Login</p>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
