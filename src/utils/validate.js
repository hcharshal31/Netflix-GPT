export const checkFormValidation = (email, password, name = null) => {
  email = email.trim();
  password = password.trim();

  const emailCheck = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
  const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
  const nameCheck = /^[A-Za-z]{2,}([-' ][A-Za-z]{2,})*$/.test(name);

  if (!email && !password && (name === null || !name)) {
    return "Please fill all the form fields";
  }

  if (!nameCheck) {
    return "Name is not valid.";
  }

  if (!emailCheck) {
    return "Email is not valid.";
  }

  if (!passwordCheck) {
    return "Password is not valid.";
  }

  return null;
};
