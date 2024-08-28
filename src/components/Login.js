import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = ()=>{
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
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign up"}</h1>
          <form>
          {!isSignInForm &&<input
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 w-full bg-gray-700 text-white rounded"
            />}
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-2 w-full bg-gray-700 text-white rounded"
            />
            <input
              type="password"
              placeholder="password"
              className="p-4 my-2 w-full bg-gray-700 text-white rounded"
            />
            <button className="p-4 my-2 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In":"Sign up"}</button>
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
