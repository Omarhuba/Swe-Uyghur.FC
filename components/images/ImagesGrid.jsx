/* eslint-disable @next/next/no-img-element */
// import { useFireStore } from "../../hooks/useFireStore";
import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { motion } from "framer-motion";

export const ImagesGrid = ({ setSelectedImage }) => {
  const [docs, setDocs] = useState([]);
  // console.log("docs", docs);

  useEffect(() => {
    const collectionRef = collection(db, "image");
    console.log("collectionref", collectionRef);
    const q = query(collection(db, "image"), orderBy("timespamp", "desc"));
    const unsubscribe = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
      return unsubscribe;
    });
  }, []);

  return (
    <div className="mx-auto grid grid-cols-3 px-8">
      {docs &&
        docs.map((doc) => (
          <motion.div
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
            className=""
            layout
          >
            <img
              className=" top-0 left-0 w-full h-full object-cover p-4  cursor-pointer hover:scale-105 hover:duration-700  rounded-3xl"
              src={doc.url}
              alt="images"
            />
          </motion.div>
        ))}
    </div>
  );
};
