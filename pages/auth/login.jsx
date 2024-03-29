import React from "react";
import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// import { signInWithPopup ,GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Login = () => {
  // react-firebase-hooks
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const router = useRouter();

  // const onClick = () => toast('Toast is good', { hideProgressBar: true, autoClose: 3000, type: 'success' })

  // * Sign Google providfer
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
      toast("Welcome To SweUyghur Football Club!⚽️🏆", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center sm:min-h-[700px] min-h-[500px] py-10">
      <div className="shadow-2xl sm:w-2/4  p-10 text-gray-700">
        <h1 className="text-2xl font-medium">Join Today!</h1>
        <div className="py-4">
          <h3 className="py-4">Sign in with one of the providers</h3>
          <button
            onClick={GoogleLogin}
            className="text-white bg-gray-700 w-full font-medium rounded-lg align-middle p-4 flex gap-2"
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
