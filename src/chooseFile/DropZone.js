import React, { useState } from "react";
import { LinearProgress } from "@mui/material";
import { DropzoneArea } from "react-mui-dropzone";

const DropZone = () => {
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState([]);

  const handleDrop = () => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += 20;
      setProgress(counter);
      if (counter >= 100) {
        clearInterval(interval);
        setProgress(0);
      }
    }, 500); // Adjust interval as needed
  };

  function handleChange(files) {
    setTimeout(() => {
      setState(files);
      console.log("Uploaded files:", files);
    }, 3000); // Delay of 3 seconds before updating state
  }

  return (
    <div>
      <DropzoneArea
        acceptedFiles={["image/*"]}
        maxFileSize={5000000}
        onChange={handleChange}
        onDrop={handleDrop}
      />
      {progress <= 100 && progress > 0 && <LinearProgress value={progress} />}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row" , margin:"auto",}}>
        {state.map((file, index) => (
          <div key={index} >
            <img src={URL.createObjectURL(file)} alt={`File ${index}`} style={{height:"300px" , width:"150px",padding:"10px"}}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropZone;