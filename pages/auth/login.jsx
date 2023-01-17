import React from 'react'
import { FcGoogle } from 'react-icons/fc'
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// import { signInWithPopup ,GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../utils/firebase'


const Login = () => {

    // * Sign Google providfer
    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
          } catch (error) {
            console.log(error);
          }
        };


  return (
    <div className='shadow-xl mt-32 p-10 text-gray-700'>
        <h1 className='text-2xl font-medium'>Join Today!</h1>
        <div className='py-4'>
            <h3 className='py-4'>Sign in with one of the providers</h3>
            <button onClick={GoogleLogin} className='text-white bg-gray-700 w-full font-medium rounded-lg align-middle p-4 flex gap-2'>

                <FcGoogle className='text-2xl' />
                Sign in with Google
            </button>
        </div>
    </div>
  )
}

export default Login