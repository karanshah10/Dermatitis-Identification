import React, { useState, useRef } from "react";
import ImageUploadTemplate from '../component/image-upload-template/image-upload-template';

const ImageUpload = (props) => {
  // const [image, setImage] = useState("");
  const inputFile = useRef(null);
  const handleFileUpload = e => {
    console.log("handleFileUpload")
    console.log(e.target);
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
      console.log(files[0]);
      props.setImageSec(files[0]);
      // setImage(files[0]);
    }
  };

  const onButtonClick = () => {
    console.log("onButtonClick")
    inputFile.current.click();
  };

  // console.log("imageimage", image);
  return (
    <div>
      <ImageUploadTemplate onButtonClick={onButtonClick}
        handleFileUpload={handleFileUpload}
        inputFile={inputFile} />
    </div>
  );
};

export default ImageUpload;