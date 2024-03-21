import React from "react";
import { encrypt, decrypt,compare } from "n-krypta";

const EncrptDecrypt = () => {
  const secretKey = "key";

  const object = {
    userName: "kasimhusain",
    password: "12345",
  };
  const EncryptData = encrypt(object.password, secretKey);
  const DecryptData = decrypt(EncryptData, secretKey);

  console.log(EncryptData);
  console.log(DecryptData);

  const compareData = compare("123456", EncryptData, secretKey);

  if (compareData) {
    console.log("matched");
  } else {
    console.log("unmatched");
  }
  return <div>data</div>;
};

export default EncrptDecrypt;
