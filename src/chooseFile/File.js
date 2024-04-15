import React, { useState } from "react";

const File = () => {
  const [selectedFile, setSelectedFile] = useState();
  function handleAudioChange (e) {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleImageChange (e) {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleVideoChange (e) {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>     
      <div style={{display:"flex" , alignItems:'center',justifyContent:"center" ,}}>
       <input type="file" accept="audio/*" onChange={handleAudioChange} />
       {selectedFile && (
        <div>
          <audio controls>
            <source src={selectedFile} type="audio/mpeg" />
          </audio>
        </div>
       )} 
      </div>
      <div style={{display:"flex" , alignItems:'center',justifyContent:"center" ,}}>
       <input type="file" accept="video/*" onChange={handleVideoChange} />
       {selectedFile && (
        <div>
        <video src={selectedFile} style={{height:"300px" ,width:"300px"}} controls />
        </div>
        )}  
      </div>
      <div style={{display:"flex" , alignItems:'center',justifyContent:"center" ,}}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <img src={selectedFile} style={{height:"300px" ,width:"300px"}}/>
      </div>
    </div>
  );
};

export default File;
