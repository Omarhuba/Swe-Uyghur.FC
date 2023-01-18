import React from 'react'
import { signOut, getAuth } from "firebase/auth";
// import { auth } from '../../utils/firebase'



const Signout = () => {
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  return (
    <div>
        <button>Sign out</button>
    </div>
  )
}

export default Signout


