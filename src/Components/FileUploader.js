import React, { useState } from "react";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!selectedFile) {
      return alert("Please select a PDF file");
    }

    // Your Fetch request logic here, using the selectedFile
    const formData = new FormData();
    formData.append("pdfFile", selectedFile);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const response = await fetch("http://localhost:3001/upload-pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.text();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <label htmlFor="fileInput">Select a PDF file:</label>
      <input
        type="file"
        id="fileInput"
        accept="application/pdf"
        onChange={(event) => {
          setSelectedFile(event.target.files[0]);
        }}
      />
      <button type="submit">Upload PDF</button>
    </form>
  );
}

export default FileUploader;
