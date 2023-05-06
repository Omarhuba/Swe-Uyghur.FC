import React, { useState, useEffect } from "react";
import { FcAddImage } from "react-icons/fc";
import { auth, db } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import { ProgressBar } from "../images/ProgressBar";
import { ref, uploadBytes } from "firebase/storage";
import { ImagesGrid } from "./ImagesGrid";
import { Modal } from "../../components/images/Modal";

export const TeamImages = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const types = ["image/png", "image/jpeg"];
  //* check our user
  const checkeUser = () => {
    if (loading) return;
    if (!user) router.push("/auth/login");
  };

  useEffect(() => {
    checkeUser();
  }, [user, loading]);

  const handleChange = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError('Ladda up bilden med typ "png eller jpeg"');
    }
  };
  return (
    <div>
      <div className="flex justify-center text-center flex-col">
        {user && (
          <form onChange={handleChange}>
            <div className="max-w-16 mx-auto flex justify-center items-center  py-8">
              <label htmlFor="file">
                <FcAddImage className="w-16 h-16 cursor-pointer" />
              </label>
              <input id="file" type="file" className="hidden" />
            </div>
          </form>
        )}
        <div>
          {error && <div>{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
        <ImagesGrid setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
    </div>
  );
};
