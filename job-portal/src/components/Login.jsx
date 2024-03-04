import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/Firebase.config';


const Login = () => {

    const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const clickhandler = ()=>{
    signInWithPopup(auth, googleProvider).then((result) => {
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}

  return (
    <div className=' h-screen w-full flex justify-center items-center'>
        <button className='bg-bluee px-8 py-2 rounded-sm text-white'
        onClick={clickhandler}>Login</button>
    </div>
  )
}

export default Login