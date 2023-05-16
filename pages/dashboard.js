/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { auth, db } from "../utils/firebase";
import {
  useAuthState,
  useVerifyBeforeUpdateEmail,
} from "react-firebase-hooks/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Message } from "../components/Message";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { BsTrash2Fill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const signOut = () => {
    setTimeout(() => {
      auth.signOut();
    }, 60 * 60 * 1000);
  };

  const getData = () => {
    if (loading) return;
    if (!user) router.push("/auth/login");
    if (user) {
      const collectionRef = collection(db, "posts");
      const q = query(collectionRef, where("user", "==", user.uid));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
      return unsubscribe;
    }
  };

  const deletePost = async (id) => {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef);
  };

  useEffect(() => {
    // if (loading) return;
    // if (!user) router.push("/auth/login");
    getData();
    signOut();
  }, [user, loading]);

  return (
    <div>
      {user && (
        <div className="flex justify-center p-4">
          <div className="w-full  bg-white border mt-10 sm:max-w-xl border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-6 ">
              <div className="flex w-full justify-center items-center gap-4 ">
                <img
                  className="w-16 sm:w-32 mb-4 rounded-full cursor-pointer m-4"
                  src={user.photoURL}
                  alt="img"
                />
                <span className="text-xl text-gray-500 dark:text-gray-400">
                  <h1 className="uppercase text-xl font-medium text-gray-900 dark:text-white">
                    {user.displayName}
                  </h1>
                  <h4 className="text-base">{user.email}</h4>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Link
                  href="/"
                  className="flex justify-center items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  To Home
                </Link>
                <Link
                  href="/photos"
                  className="flex justify-center items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  To
                </Link>
                <Link
                  href="/posts"
                  className="flex justify-center items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  To Posts
                </Link>
                <Link
                  href="/createpost"
                  className="flex justify-center items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create A Post
                </Link>
              </div>
              <div className="py-6 px-10  flex justify-end w-full">
                <button
                  onClick={() => auth.signOut()}
                  className="flex justify-center items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logga ut
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
      <div className="h-full  py-6 min-h-full">
        <h1 className="text-center text-3xl ">Din Inlägg</h1>
        <div>
          {posts.map((post) => {
            return (
              <Message {...post} key={post.id}>
                <div className="flex gap-4 py-2">
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                    className="flex justify-center items-center gap-1 text-red-600 text-sm"
                  >
                    <BsTrash2Fill />
                    Ta bort
                  </button>
                  <Link href={{ pathname: "/createpost", query: post }}>
                    <button className="flex justify-center items-center gap-1 text-cyan-600 text-sm">
                      <AiFillEdit />
                      Ändra
                    </button>
                  </Link>
                </div>
              </Message>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
