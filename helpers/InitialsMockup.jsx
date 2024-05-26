import React from "react";

export const InitialsMockup = ({ firstName, lastName, email }) => {
  const firstNameSplice = firstName ? firstName.charAt(0) : "";
  const lastNameSplice = lastName ? lastName.charAt(0) : "";
  const emailSplice = email ? email.substring(0, 2) : "";
  return (
    <h2 className="flex items-center text-black">
      {firstName ? (
        <>
          {firstNameSplice}
          {lastNameSplice}
        </>
      ) : (
        <>{emailSplice}</>
      )}
    </h2>
  );
};
