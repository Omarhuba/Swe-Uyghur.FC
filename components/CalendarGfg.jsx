import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { auth, db } from '../utils/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
export const CalendarGfg = () => {
  const date = new Date()

  const [value, setValue] = useState(date);
  const [title, setTitle] = useState('')
  const [discription, setDiscription] = useState({discription: ''})





  const onClickHandler = async () => {

    e.preventDefault();

    //
    if(!post.discription){
      toast.error('You Missed A Post..',{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      })
      return
    }
    if(post.discription.length > 300){
      toast.error('POST CAN NOT BE LONGER THAN 300..!!',{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      })
      return
    }
    //make a post
    const collectionRef = collection(db, 'posts')
    await addDoc(collectionRef,{
      ...post,
      timestamp: serverTimestamp(),
      user: user.uid,
      avatar: user.photoURL,
      username: user.displayName,
    })
    setDiscription({discription:''})
    console.log(value);
  };

  return (
    <div className="flex justify-evenly">
      <div>
        <h1 className="text-2xl py-6">SweUyghur Kalender - GeeksforGeeks</h1>
        <Calendar
          onChange={setValue}
          value={value}
          onClickDay={onClickHandler}
        />
      </div>
      <div className="">
        <h1 className="py-6 text-2xl">click date and add event</h1>
        <div>
        <form onSubmit={onClickHandler}>
          <div>
            <h3 className="font-bold text-xl font-poppins">Event Title</h3>
            <input type="text" className="bg-gray-300 h-12 w-full text-gray-800 p-2 rounded-md" />
          </div>
          <div className="py-2">
            <h3 className="font-poppins font-medium text-md py-2">Description</h3>
            <textarea value={discription.discription} onChange={(e) => setDiscription({...discription, discription: e.target.value})} className="bg-gray-300 h-48 w-full text-gray-800 p-2 rounded-md"></textarea>
            <p className={`text-cyan-700 font-medium text-sm ${discription.discription.length > 300 ? ' text-red-600' : ''}`}>{discription.discription.length}/300</p>
          </div>
          <button type="submit" className="text-white font-medium w-full bg-slate-600 p-3 rounded-lg">Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
};
