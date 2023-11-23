import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import netflexBackgroundImage from "../assets/image/netflex.jpg";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    if (message !== null) {
      setErrorMessage(message);
      return;
    } else {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            updateProfile(auth.currentUser, {
              displayName: name.current.value,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;

                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
              })
              .catch((error) => {});
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setErrorMessage(`${errorMessage}   ${errorCode}`);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }
  };
  return (
    <>
      <Header isSignin={false} />
      <div className="absolute h-full	">
        <img
          className="w-screen h-screen"
          src={netflexBackgroundImage}
          alt="BackGroundImage"
        />
      </div>
      <form
        onSubmit={(e) => {
          return e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-10  mx-auto right-0 left-0 text-white rounded bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800"
        />
        <button
          className="p-2 m-2 bg-red-700 w-full rounded"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflex ? Signup now"
            : "Already an user ? login now"}
        </p>
        <p className="text-red-600 font-bold text-lg p-2">{errorMessage}</p>
      </form>
    </>
  );
};
export default Login;
