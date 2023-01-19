/* eslint-disable @next/next/no-img-element */
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import img from "../assets/img-1.png";
import Image from "next/image";
import { userAgent } from "next/server";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  console.log(loading);
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) router.push("/auth/login");
  }, [user, loading]);

  //   const getData = async () => {
  //     if (loading){
  //       return
  //     } ;
  //     if (!user){
  //       return router.push('/auth/login')
  //     }
  //   }
  //   useEffect(() => {
  //     getData()
  // // eslint-disable-next-line
  // },[user, loading])
  // useEffect(() => {
  //   getData();
  // },[user, loading])

  return (
    <>
      {user && (
        <div className="flex justify-center p-20">
          <div className="w-full max-w-lg h-100 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center p-20">
              {/* <Image
                className="w-20 rounded-full cursor-pointer mr-4"
                src={img}
                alt="img"
              /> */}
              <img
                className="w-40 mb-4 rounded-full cursor-pointer m-4"
                src={user.photoURL}
                alt="img"
              />
              <h1 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                {user.displayName}
              </h1>
              <span className="text-xl text-gray-500 dark:text-gray-400">
                {user.email}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  To Home
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
      {/* {!user && (
        <div>
          <Link href="/auth/login">Go to login</Link>
        </div>
      )} */}
    </>
  );
};

export default Dashboard;

// <div className="flex justify-center items-center p-30 ">
//   <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//     <h1 >Your Dashboard</h1>
//     <h3>your name</h3>
//     <h4>your email</h4>
//     <button onClick={() => auth.signOut()}>Logout</button>
//   </div>
// </div>
