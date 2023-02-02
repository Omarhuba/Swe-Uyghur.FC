/* eslint-disable react/jsx-key */
import React from "react";
import { Message } from "../components/Message";
import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Posts = () => {
  //  get all the post
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []);




  return (
    <div className=" bg-slate-100  h-full">
      <h1 className=" text-center py-4">KOLLA VAD DE ANDRA SKRIVIT</h1>
      {allPosts.map(post=>(<Message {...post} key={post.id} />)
      )}
      {/* <Message/> */}
    </div>
  );
};

export default Posts;
