import React, { useState, useRef } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null); // Ref to access file input

  const handleRemove = () => {
    setSelectedImage(null); // Remove image from state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  };

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="Uploaded Preview"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          {/* Download button */}
          <a
            href={URL.createObjectURL(selectedImage)}
            download={selectedImage.name || "downloaded-image"}
          >
            <button>Download</button>
          </a>
          &nbsp;
          {/* Remove button */}
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}

      <br />

      {/* File input field with ref */}
      <input
        type="file"
        name="myImage"
        ref={fileInputRef}
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
