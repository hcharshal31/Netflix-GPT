import React from "react";
import { useState, useRef } from "react";
import { checkFormValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { LOGO, USER_AVATAR } from "../utils/Constants";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignInClick = () => {
    setErrMessage(null);
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    const message = checkFormValidation(
      email.current?.value,
      password.current?.value,
      isSignIn ? null : name.current?.value
    );
    setErrMessage(message);

    if (errMessage) return;
    console.log(errMessage);

    if (!isSignIn) {
      // Sign Up Logic.

      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //Updating the profile info
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMessage(errorCode + "- " + errorMessage);
        });
    } else {
      // Sign In logic.

      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "- " + errorMessage);
        });
    }
  };

  return (
    <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg')] bg-cover bg-center h-screen">
    <Header />
    <div className="absolute w-full h-full flex justify-center items-center">
    
      <form
        onSubmit={(ev) => ev.preventDefault()}
        className="w-1/3 p-12 bg-black bg-opacity-80 text-white"
      >
        <h1 className="text-4xl my-2 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 w-full my-4 rounded-lg bg-gray-700 bg-opacity-70"
            type="text"
            placeholder="Enter Name"
          />
        )}
        <input
          ref={email}
          className="p-4 w-full my-4 rounded-lg bg-gray-700 bg-opacity-70"
          type="email"
          placeholder="Email or Mobile Number"
        />
        <input
          ref={password}
          className="p-4 w-full my-4 rounded-lg bg-gray-700 bg-opacity-70"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 font-semibold text-md">{errMessage}</p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-red-700 w-full h-12 rounded-lg my-4"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
          <span className="opacity-70">
            {isSignIn ? "New to Netflix? " : "Already a User? "}
          </span>
          <b onClick={handleSignInClick} className="cursor-pointer">
            {isSignIn ? "Sign up now" : "Click here to Sign In"}
          </b>
          .
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
