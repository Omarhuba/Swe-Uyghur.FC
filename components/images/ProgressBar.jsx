import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";

export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  //   const [image, setImage] = useState(null);
  useEffect(() => {
    if (url) {
      setFile(url);
    }
  }, [setFile, url]);
  //   console.log("hellloooo", progress, url);

  return (
    <div className="px-2 max-w-[26rem] mx-auto">
      <div
        className="h-2 bg-cyan-400 mt-6 "
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
};
