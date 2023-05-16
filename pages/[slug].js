/* eslint-disable @next/next/no-img-element */

import { db, auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { Message } from "../components/Message";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  Timestamp,
  arrayUnion,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

export default function Delatils() {
  const router = useRouter();
  const routeData = router.query;
  const [messages, setMessages] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  //! submit comments
  const submitComments = async () => {
    if (!auth.currentUser) return router.push("/auth/login");

    if (!messages) {
      toast.error("Skriv kommentarer!!!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return;
    }
    const docRef = doc(db, "posts", routeData.id);
    await updateDoc(docRef, {
      comments: arrayUnion({
        messages,
        avatar: auth.currentUser.photoURL,
        userName: auth.currentUser.displayName,
        time: Timestamp.now(),
      }),
    });
    setMessages("");
    // router.push("/posts");asdasdasd
  };

  // HÄMTA KOMMENTAR
  const getComments = async () => {
    const docRef = doc(db, "posts", routeData.id);
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      setAllMessages(snapshot.data().comments);
    });
    return unsubscribe;
  };

  // formated time

  useEffect(() => {
    if (!router.isReady) return;
    getComments();
  }, [router.isReady]);

  return (
    <div>
      <Message {...routeData} className="h-screen"></Message>
      <div className="my-4">
        <div className="flex justify-center gap-2">
          <input
            onChange={(e) => setMessages(e.target.value)}
            type="text"
            value={messages}
            placeholder="Skriv din kommentarer här..."
            className="bg-gray-700 w-[60%] p-2 text-white rounded-md"
          />
          <button
            onClick={submitComments}
            className="bg-cyan-500 text-white px-4 rounded-md"
          >
            Submit
          </button>
        </div>
        <div className="py-6">
          <h2 className="font-bold px-4">Kommentarer</h2>
          {allMessages &&
            allMessages.map((comment) => (
              <div
                className="bg-white p-4 my-4 border-2 rounded-lg h-full mx-4"
                key={comment.time}
              >
                <div className="flex  items-center gap-2 mb-4">
                  <img
                    className="w-10 rounded-full"
                    src={comment.avatar}
                    alt="image"
                  />
                  <h2 className="font-medium">{comment.userName}</h2>
                </div>
                <p className="break-words">{comment.messages}</p>
              </div>
            ))}
          {/* {!allMessages && <p>Finns ingen komentar</p>} */}
        </div>
      </div>
    </div>
  );
}
