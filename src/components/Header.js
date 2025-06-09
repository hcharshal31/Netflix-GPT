import React from 'react';
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from "react-redux"
import { LOGO } from '../utils/Constants';

const Header = () => {
  const [profileClick, setProfileClick] = useState(false);


  const navigate = useNavigate(); //useNavigate is hook that comes from the react-router-dom that help us to provide the path(route) to which we want to navigate
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

   useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");

            } else {
                // User is signed out

                dispatch(removeUser());
                navigate("/");

            }
            });
            return () => unsubscribe(); // This will be called when the component unmounts. because if the component is not mounted then we don't want this useffect to get called.
    }, []);

  const profileClicked = ()=>{
    setProfileClick(!profileClick);
  }

  const handleSignOut = (ev) => {
    ev.preventDefault();
    // Remaining logic

    signOut(auth).then(() => {
      dispatch(removeUser());
  // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }

  return (
    <div className="absolute top-0 left-0 p-4 z-10 w-full flex justify-between items-center">
      <img
      src={LOGO}
      className="w-44"
      alt="Netflix Logo"
      />
      {
        user &&
        <div>
          <img
          src={user?.photoURL}
          className="w-14 rounded-lg"
          alt="User Profile Logo"
          onClick={ profileClicked }
          />
          { profileClick && (<button className="bg-red-600 rounded-md text-white h-6 px-2 mt-2 text-xs w-18 right-4 absolute" onClick={handleSignOut}>Sign Out</button>) }
        </div>
      }
    </div>
  )
}

export default Header;