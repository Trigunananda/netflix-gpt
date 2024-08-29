import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
        
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }  else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }


  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className="relative h-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-md text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign up"}</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {!isSignInForm && <input ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 w-full bg-gray-700 text-white rounded"
            />}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 my-2 w-full bg-gray-700 text-white rounded"
            />
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="p-4 my-2 w-full bg-gray-700 text-white rounded"
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-2 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
