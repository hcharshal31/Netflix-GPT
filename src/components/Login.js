import React from 'react';
import { useState } from 'react';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = ()=>{
    setIsSignIn(!isSignIn);
  }

  return (
    <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg')] bg-cover bg-center h-screen flex justify-center items-center">

  <div className="absolute top-4 left-4 z-10">
    <img
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      className="w-44"
      alt="Netflix Logo"
    />
  </div>

  <form className="w-1/3 p-12 bg-black bg-opacity-80 text-white">
    <h1 className="text-4xl my-2 font-bold">{isSignIn? "Sign In": "Sign Up"}</h1>
    {!isSignIn && <input className="p-4 w-full my-4 rounded-lg bg-gray-700 bg-opacity-70" type="text" placeholder='Enter Name' />}
    <input className="p-4 w-full my-4 rounded-lg bg-gray-700 bg-opacity-70" type="email" placeholder='Email or Mobile Number' />
    <input className="p-4 w-full my-4 rounded-lg bg-gray-700 bg-opacity-70" type="password" placeholder='Password' />
    <button className="bg-red-700 w-full h-12 rounded-lg my-4">{isSignIn? "Sign In": "Sign Up"}</button>
    <p><span className="opacity-70">{isSignIn? "New to Netflix? ": "Already a User? "}</span><b onClick={handleSignIn} className="cursor-pointer">{isSignIn? "Sign up now": "Click here to Sign In"}</b>.</p>
  </form>
</div>

  )
}

export default Login