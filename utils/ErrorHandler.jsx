export function getErrorMessage(error) {
  if (error.code === "auth/network-request-failed") {
    return "Network Error, Please Check your connection";
  } else if (error.code === "auth/email-already-in-use") {
    return "Email already exists";
  } else if (error.code === "auth/invalid-email") {
    return "Invalid email";
  } else if (error.code === "auth/invalid-credential") {
    return "Invalid Email or password";
  } else {
    // Log for debugging
    console.log("Unhandled error:", error);
    return `Error: ${
      error.message || "An unexpected error occurred. Please try again."
    }`;
  }
}
