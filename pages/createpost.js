import React from "react";
import { useState, useEffect } from "react";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const Createpost = () => {
  const [post, setPost] = useState({ discription: "" });
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const routeData = router.query;

  const submitHandler = async (e) => {
    e.preventDefault();

    //
    if (!post.discription) {
      toast.error("You Missed A Post..", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return;
    }
    if (post.discription.length > 300) {
      toast.error("POST CAN NOT BE LONGER THAN 300..!!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return;
    }

    if (post.hasOwnProperty("id")) {
      const docRef = doc(db, "posts", post.id);
      const updatePost = { ...post, timestamp: serverTimestamp() };
      await updateDoc(docRef, updatePost);
      toast.success("Din inlägg har uppdaterat! 🥸", {position: toast.POSITION.TOP_CENTER, autoClose: 1500})
      return router.push("/posts");
    } else {
      //make a post
      const collectionRef = collection(db, "posts");
      await addDoc(collectionRef, {
        ...post,
        timestamp: serverTimestamp(),
        user: user.uid,
        avatar: user.photoURL,
        username: user.displayName,
      });
      setPost({ discription: "" });
      toast.success("Din inlägg har gjorts! 🥸", {position: toast.POSITION.TOP_CENTER, autoClose: 1500})
      return router.push("/posts");
    }
  };

  //* check our user
  const checkeUser = () => {
    if (loading) return;
    if (!user) router.push("/auth/login");
    if (routeData.id) {
      setPost({ discription: routeData.discription, id: routeData.id });
    }
  };

  useEffect(() => {
    checkeUser();
  }, [user, loading]);

  return (
    <div className="h-screen bg-cyan-700 flex justify-center ">
      <div className="my-20 p-12 shadow-2xl rounded-xl min-w-[650px] max-h-[450px] mx-auto bg-white">
        <form onSubmit={submitHandler}>
          <h1 className="font-bold text-3xl font-poppins">
            {post.hasOwnProperty("id")
              ? "Edit Your  Post"
              : "Create A New Post"}
          </h1>
          <div className="py-2">
            <h3 className="font-poppins font-medium text-md py-2">
              Description
            </h3>
            <textarea
              value={post.discription}
              onChange={(e) =>
                setPost({ ...post, discription: e.target.value })
              }
              className="bg-gray-700 h-48 w-full text-white p-2 rounded-xl"
            ></textarea>
            <p
              className={`text-cyan-700 font-medium text-sm ${
                post.discription.length > 300 ? " text-red-600" : ""
              }`}
            >
              {post.discription.length}/300
            </p>
          </div>
          <button
            type="submit"
            className="text-white font-medium w-full bg-slate-600 p-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
