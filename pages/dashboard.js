/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  console.log(loading);
  const router = useRouter();

  const signOut = () => {
    setTimeout(() => {
      auth.signOut();
      console.log("logga ut");
    }, 60 * 60 * 1000);
  };
  useEffect(() => {
    if (loading) return;
    if (!user) router.push("/auth/login");

    signOut();
  }, [user, loading]);

  return (
    <>
      {user && (
        <div className="flex justify-center p-20">
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
    </>
  );
};

export default Dashboard;
