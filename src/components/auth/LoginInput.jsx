import React, { useState } from "react";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../../helpers/Auth";
import { getErrorMessage } from "../../../utils/ErrorHandler";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../../utils/Validation.jsx";

const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateLogin({ email, password, setErrors })) {
      try {
        toast.promise(login(email, password), {
          loading: "logging in",
          success: () => {
            setEmail("");
            setPassword("");
            navigate("/");
            return "login successful";
          },
          error: (err) => getErrorMessage(err),
        });
      } catch (err) {}
    }
  };

  const labelStyle = (fieldName) => {
    return `text-[12px] ${
      errors[fieldName] ? "text-[#FF3939]" : "text-[#333333]"
    } `;
  };

  const inputStyle = (fieldName) => {
    return `border ${
      errors[fieldName] ? "border-[#FF3939]" : "border-[#D9D9D9]"
    } px-4 outline-none py-3 rounded-[8px] pl-[40px] pr-[100px] w-full focus-within:border-[#633CFF] focus:border-[1px] focus:shadow-[0_0_8px_2px_rgba(99,60,255,0.6)]`;
  };

  const handleInputChange = (fieldName, value) => {
    if (fieldName === "email") setEmail(value);
    else if (fieldName === "password") setPassword(value);

    setErrors({ ...errors, [fieldName]: "" });
  };
  return (
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
            <span className="absolute right-3 top-[55%] hidden xs:flex transform -translate-y-1/2 text-[#FF3939] text-xs">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-center flex-col gap-[4px] text-[#333333]">
        <label htmlFor="password" className={labelStyle("password")}>
          Password
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
            placeholder="Enter your password"
            className={inputStyle("password")}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          {errors.password && (
            <span className="absolute right-3 top-[55%] hidden xs:flex transform -translate-y-1/2 text-[#FF3939] text-xs">
              {errors.password}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-[#633CFF] hover:bg-[#BEADFF]  px-[27px] py-[11px] rounded-[8px] text-[12px] text-[#fff]"
      >
        Login
      </button>

      <div className="text-center md:flex md:items-center md:justify-center gap-[3px] ">
        <p className="text-[#737373]">Dont have an account?</p>
        <Link to="/signup">
          <p className="text-[#633CFF]">Create an account</p>
        </Link>
      </div>
    </form>
  );
};

export default LoginInput;
