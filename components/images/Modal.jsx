/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export const Modal = ({ selectedImage, setSelectedImage }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div className="backdrop" onClick={clickHandler}>
      <motion.img
        className=""
        src={selectedImage}
        alt="selected image"
        initial={{ y: "-80vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};
