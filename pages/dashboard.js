/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { auth, db } from "../utils/firebase";
import { useAuthState, useVerifyBeforeUpdateEmail } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Message } from "../components/Message";
import { collection, onSnapshot, query, where } from "firebase/firestore";


const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  console.log(user);
  const router = useRouter();

  const signOut = () => {
    setTimeout(() => {
      auth.signOut();
    }, 60 * 60 * 1000);
  };

  const getData = () => {
    if (loading) return;
    if (!user) router.push("/auth/login");

    const collectionRef = collection(db, "posts");
        const q = query(collectionRef, where("user", "==", user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
        return unsubscribe;


};



  useEffect(() => {
    // if (loading) return;
    // if (!user) router.push("/auth/login");
    getData();
    signOut();
  }, [user, loading]);

  return (
    <>
      {user && (
        <div className="flex justify-center p-10">
          <div className="w-full max-w-lg h-100 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-10">
              <div className="flex w-full justify-center items-center">
                <img
                  className="w-30 mb-4 rounded-full cursor-pointer m-4"
                  src={user.photoURL}
                  alt="img"
                />
                <span className="text-xl text-gray-500 dark:text-gray-400">
                  <h1 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                    {user.displayName}
                  </h1>
                  {user.email}
                </span>
              </div>
              <div className="flex mt-4 space-x-8 md:mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  To Home
                </Link>
                <Link
                  href="/createpost"
                  className="inline-flex items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create a Post
                </Link>
                <button
                  onClick={() => auth.signOut()}
                  className="inline-flex items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
      <div className="h-full  py-6 min-h-full">
        <h1 className="text-center">this is your post</h1>
        <div>
        {posts.map((post) => {
         return <Message {...post} key={post.id}></Message>
        })}

        </div>
      </div>
    </>
  );
};

export default Dashboard;
