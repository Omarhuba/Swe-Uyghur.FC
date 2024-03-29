/* eslint-disable react/jsx-key */
import React from "react";
import { Message } from "../components/Message";
import { useState, useEffect } from "react";
import { auth, db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { FcComments } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";

const Posts = () => {
  //  get all the post
  const [allPosts, setAllPosts] = useState([]);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  // check user
  const checkeUser = () => {
    if (loading) return;
    if (!user) router.push("/auth/login");
  };

  useEffect(() => {
    checkeUser();
  }, [user, loading]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className=" bg-slate-100  h-full">
      <h1 className=" text-center font-poppins font-bold text-xl sm:text-3xl py-8">
        KOLLA VAD DE ANDRA SKRIVIT
      </h1>
      {allPosts.map((post) => (
        <Message key={post.id} {...post}>
          <Link
            href={{ pathname: `/${post.id}`, query: { ...post } }}
            className="text-xs w-20"
          >
            <span className="flex gap-2 pt-4">
              <FcComments size={25} />
              <button>
                {post.comments?.length > 0 ? post.comments?.length : 0}
                <span className="px-2">Kommentarer</span>
              </button>
            </span>
          </Link>
        </Message>
      ))}
    </div>
  );
};

export default Posts;
