import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useState, useEffect } from "react";

export const useFireStore = () => {
  const [docs, setDocs] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "image");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setDocs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []);

  //   useEffect(() => {
  //     const collectionRef = collection(db, "posts");
  //     console.log("collectionref", collectionRef);
  //     const q = query(collectionRef, orderBy("timestamp", "desc"));
  //     // const q = query(collection(db, "image"));
  //     const unsubscribe = onSnapshot(q, (snap) => {
  //       let documents = [];
  //       snap.forEach((doc) => {
  //         documents.push({ ...doc.data(), id: doc.id });
  //       });
  //       setDocs(documents);
  //       return unsubscribe;
  //     });
  //   }, [collection]);

  return { docs };
};
