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
  }, [collection]);

  return (
    <div className="flex">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            <img
              className=" max-w-[400px] max-h-72"
              src={doc.url}
              alt="images"
            />
          </div>
        ))}
    </div>
  );
};
