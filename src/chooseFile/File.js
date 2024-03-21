import React from "react";

const File = () => {
  return (
    <div>
      <input type="file" id="myFile" size="50" accept="image/*" />
      <audio id="audioPlayer" controls="true"></audio>
    </div>
  );
};

export default File;
