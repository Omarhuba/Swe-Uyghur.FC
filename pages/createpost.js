import React from "react";
import { useState, useEffect } from "react";
import { auth, db } from '../utils/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Createpost = () => {
  const [post, setPost] = useState({discription: ''})
  const [user,loading] = useAuthState(auth)
  const router = useRouter()

  const submitHandler = async (e)=>{
    e.preventDefault();

    //make a post
    const collectionRef = collection(db, 'posts')
    await addDoc(collectionRef,{
      ...post,
      timestamp: serverTimestamp(),
      user: user.uid,
      avatar: user.photoURL,
      username: user.displayName,
    })
    setPost({discription:''})
    return router.push('/posts')
  }

  return (
    <div className="h-screen bg-cyan-700 flex justify-center ">
      <div className="my-20 p-12 shadow-2xl rounded-xl min-w-[650px] max-h-[450px] mx-auto bg-white">
        <form onSubmit={submitHandler}>
          <h1 className="font-bold text-3xl font-poppins">Create A New Post</h1>
          <div className="py-2">
            <h3 className="font-poppins font-medium text-md py-2">Description</h3>
            <textarea value={post.discription} onChange={(e) => setPost({...post, discription: e.target.value})} className="bg-gray-700 h-48 w-full text-white p-2 rounded-xl"></textarea>
            <p className={`text-cyan-700 font-medium text-sm ${post.discription.length > 300 ? ' text-red-600' : ''}`}>{post.discription.length}/300</p>
          </div>
          <button type="submit" className="text-white font-medium w-full bg-slate-600 p-3 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
