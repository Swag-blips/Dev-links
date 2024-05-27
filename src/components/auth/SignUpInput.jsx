import React, { useState } from "react";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import { Link } from "react-router-dom";
import { signup } from "../../../helpers/Auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../../utils/ErrorHandler";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/config.jsx";
import useAuth from "../../../firebase/AuthContext.jsx";
import { validateSignUp } from "../../../utils/Validation.jsx";

const SignupInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateSignUp({ email, password, confirmPassword, setErrors })) {
      try {
        const userCredential = await toast.promise(signup(email, password), {
          loading: "Signing up...",
          success: "Account created successfully",
          error: (err) => {
            return getErrorMessage(err);
          },
        });
        if (userCredential.user) {
          const user = userCredential.user;
          await setDoc(doc(db, "Profile", user.uid), {
            email: user.email,
            firstName: "",
            lastName: "",
            profileImg: "",
          });
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          navigate("/");
        }
      } catch (err) {
      }
    }
  };

  const handleInputChange = (fieldName, value) => {
    if (fieldName === "email") setEmail(value);
    else if (fieldName === "password") setPassword(value);
    else if (fieldName === "confirmPassword") setConfirmPassword(value);

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
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          {errors.password && (
            <span className="absolute right-3  hidden xs:flex top-[55%] transform -translate-y-1/2 text-[#FF3939] text-xs">
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
            <span className="absolute right-3 hidden xs:flex top-[55%] transform -translate-y-1/2 text-[#FF3939] text-xs">
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
  );
};

export default SignupInput;
