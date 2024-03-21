import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import QRCode from "react-qr-code";

const Qr = () => {
  const [data, setData] = useState('');
  const [input, setInput] = useState(
    {
    email: [],
    subject: [],
    body: [],
  }
  );

  function handleChange(e) {
     const { name, value } = e.target;
     setInput((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <section>
        Text : &nbsp;&nbsp;&nbsp;
        <Input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      </section> */}
      {/* <section>
      Url : &nbsp;&nbsp;&nbsp;
        <Input type="url" value={data} onChange={(e) => setData(e.target.value)} />
      </section> */}
      {/* <section>
      Phone : &nbsp;&nbsp;&nbsp;

        <Input type="tel" value={data} onChange={(e) => setData(e.target.value)} />
      </section> */}
      <section>
      Email : &nbsp;&nbsp;&nbsp;
        <Input type="email" name="email" value={input.email} onChange={handleChange} />
      </section>
      <section>
      Subject : &nbsp;&nbsp;&nbsp;
        <Input type="text" name="subject" value={input.subject} onChange={handleChange} />
      </section>
      <section>
      body : &nbsp;&nbsp;&nbsp;
        <Input value={input.body} name="body" onChange={handleChange} />
      </section>

      {/* <QRCode value={data} /> */}
      {/* <QRCode value={`tel:${data}`} /> */}
      <QRCode value={`mailto:${encodeURIComponent(input.email)}?subject=${encodeURIComponent(input.subject)}&body=${encodeURIComponent(input.body)}`} />
    </div>
  );
};

export default Qr;
