import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const UploadAndDisplayImage = ({ selectedFilter, onImageRemove }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleRemove = () => {
    setSelectedImage(null);
    setProcessedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onImageRemove(); 
  };

  const processImage = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("filter", selectedFilter);

    try {
      // POST request to send the image and filter
      const response = await axios.post("http://3.137.142.127:8000/api/process-image/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // GET request to retrieve the processed image
      const processedImageResponse = await axios.get("http://localhost3.137.142.127:8000/api/processed-image/", {
        responseType: "blob",
      });

      setProcessedImage(URL.createObjectURL(processedImageResponse.data));
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  useEffect(() => {
    processImage();
  }, [selectedFilter]);

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="Uploaded Preview"
            width={"250px"}
            src={processedImage || URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          <a
            href={processedImage || URL.createObjectURL(selectedImage)}
            download={selectedImage.name || "downloaded-image"}
          >
            <button>Download</button>
          </a>
          &nbsp;
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}

      <br />

      <input
        type="file"
        name="myImage"
        ref={fileInputRef}
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
          setProcessedImage(null);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
