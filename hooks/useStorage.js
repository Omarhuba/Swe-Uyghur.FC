import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import { toast } from "react-toastify";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //! firebase refrence
    if (file === null) return;
    const storage = getStorage();

    // const imageRef = ref(storage, `image/${file.name}`);

    const imageRef = ref(storage, "image/" + file.name);
    const metadata = {
      contentType: "image/jpeg",
    };
    const uploadImage = uploadBytesResumable(imageRef, file, metadata);

    const collectionRef = collection(db, "image");

    // const uploadImage = uploadBytesResumable(imageRef, file);
    uploadImage.on(
      "state_changed",
      (snap) => {
        let procentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(procentage);
      },
      (err) => {
        setError(err);
      },
      // () => {
      //   // Upload completed successfully, now we can get the download URL
      //   getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
      //     console.log("File available at", downloadURL);
      //   });
      // }
      // async () => {
      //   const url = await getDownloadURL(uploadImage.snapshot.ref);
      //   await addDoc(collectionRef, );
      //   setUrl(url);
      // toast.success("Din inlägg har gjorts! 🥸", {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 1500,
      // });
      // }
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadImage.snapshot.ref);
          console.log("File available at", downloadURL);
          addDoc(collectionRef, {
            url: downloadURL,
            timespamp: serverTimestamp(),
          });
          toast.success("Din Bild har laddats upp!🚀🚀🚀 ", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        } catch (error) {
          console.error("Error getting download URL:", error);
        }
        return;
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
