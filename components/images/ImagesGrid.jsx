/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useFireStore } from "../../hooks/useFireStore";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../utils/firebase";

export const ImagesGrid = () => {
  const [docs, setDocs] = useState([]);
  console.log("docs", docs);

  useEffect(() => {
    const collectionRef = collection(db, "image");
    console.log("collectionref", collectionRef);
    const q = query(collection(db, "image"), orderBy("timespamp", "desc"));
    // const q = query(collection(db, "image"));
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
    <div className="mx-auto grid grid-cols-3 gap-2">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id} className=" ">
            <img
              className=" top-0 left-0 w-full h-full object-cover p-4"
              src={doc.url}
              alt="images"
            />
          </div>
        ))}
    </div>
  );
};
