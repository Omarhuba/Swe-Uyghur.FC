import { db, auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { Message } from "../components/Message";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Delatils() {
  const router = useRouter();
  const routeData = router.query;
  const [messages, setMessages] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  return (
    <>
      <Message {...routeData} className="h-screen"></Message>
      <div className="">
        <input
        onChange={(e)=>setMessages(e.target.value)}
          type="text" value={messages}
          placeholder="Skriv din kommentarer här..."
          className="bg-gray-700 w-[80%] p-2 text-white"
        />
      </div>
    </>
  );
}
