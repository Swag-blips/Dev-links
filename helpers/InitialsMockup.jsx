export const InitialsMockup = ({ firstName, lastName, email }) => {
  const firstNameSplice = firstName ? firstName.charAt(0) : "";
  const lastNameSplice = lastName ? lastName.charAt(0) : "";
  const emailSplice = email ? email.charAt(0) : "";
  console.log(firstNameSplice, lastNameSplice);
  return (
    <h2 className="flex items-center text-black">
      {firstNameSplice}
      {lastNameSplice}
    </h2>
  );
};
