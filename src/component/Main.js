import { Button, Input } from "@mui/material";
import React from "react";
import { useState } from "react";

const Main = () => {
  const [add, setAdd] = useState({
    main: false,
    textfield: false,
    radio: false,
    checkBox: false,
    button: false,
  });
  const [input, setInput] = useState({
    textfield: [],
    radio: [],
    checkBox: [],
    button: [],
  });
  const [inputCount, setInputCount] = useState({
    textfield: 1,
    radio: 1,
    checkBox: 1,
    button: 1,
  });
  const [post, setPost] = useState([]);

  const showInputField = (main, textfield, radio, checkBox, button) => {
    setAdd({
      ...add,
      [main]: true,
      [textfield]: true,
      [radio]: true,
      [checkBox]: true,
      [button]: true,
    });
  };

  const handleAddInput = (textfield, radio, checkBox, button) => {
    setInputCount((prevState) => ({
      ...prevState,
      [textfield]: prevState[textfield] + 1,
      [radio]: prevState[radio] + 1,
      [checkBox]: prevState[checkBox] + 1,
      [button]: prevState[button] + 1,
    }));
  };

  function handleSubmit() {
    console.log(input, "kkk");
    setPost([
      ...post,
      {
        textfield: input.textfield,
        radio: input.radio,
        checkBox: input.checkBox,
        button: input.button,
      },
    ]);
  }

  const handleInputChange = (e, field, index) => {
    const { name, value } = e.target;
    const updatedtextfield = [...input[field]];
    updatedtextfield[index] = { ...updatedtextfield[index], [name]: value };
    // const updatedradio = [...input[radio]];
    // updatedradio[index] = { ...updatedradio[index], [name]: value };
    // const updatedcheckBox = [...input[checkBox]];
    // updatedcheckBox[index] = { ...updatedcheckBox[index], [name]: value };
    // const updatedbutton = [...input[button]];
    // updatedbutton[index] = { ...updatedbutton[index], [name]: value };

    setInput({
      ...input,
      [field]: updatedtextfield,
      // [radio]: updatedradio,
      // [checkBox]: updatedcheckBox,
      // [button]: updatedbutton,
    });
    console.log(input);

    // const value = e.target.value;

    // setInput((preData) => ({

    //     ...preData,
    //     [textfield]: Array.isArray(preData[textfield])
    //     ? preData[textfield].map((item, idx) => (idx === index ? value : item))
    //     : value,
    // // [radio]: value,
    // // [checkBox]: value,
    // // [button]: value,
    // }));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => showInputField("main")}>Add field</Button>
        {add.main ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <section style={{ display: "flex", flexDirection: "row" }}>
              <button onClick={() => showInputField("textfield")}>
                Textfield
              </button>
              {add.textfield && (
                <div>
                  {[...Array(inputCount.textfield)].map((_, index) => (
                    <Input
                      onChange={(e) => handleInputChange(e, "textfield", index)}
                      sx={{ marginLeft: "20px" }}
                      name={`textfield${index}`}
                      // value={input.textfield}
                      type="text"
                      key={`textfield${index}`}
                      placeholder={`textfield${index + 1}`}
                    />
                  ))}
                  <Button onClick={() => handleAddInput("textfield")}>
                    Add
                  </Button>
                </div>
              )}
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
              <button onClick={() => showInputField("radio")}>Radio</button>

              {add.radio ? (
                <div>
                  {[...Array(inputCount.radio)].map((_, index) => (
                    <Input
                      onChange={(e) => handleInputChange(e, "radio", index)}
                      sx={{ marginLeft: "20px" }}
                      name={`radio${index}`}
                      // value={input.radio}
                      type="text"
                      key={`radio${index}`}
                      placeholder={index === 0 ? "title" : `option${index}`}
                    />
                  ))}
                  <Button onClick={() => handleAddInput("radio")}>Add</Button>
                </div>
              ) : null}
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
              <button onClick={() => showInputField("checkBox")}>
                checkbox
              </button>

              {add.checkBox ? (
                <div>
                  {[...Array(inputCount.checkBox)].map((_, index) => (
                    <Input
                      onChange={(e) => handleInputChange(e, "checkBox", index)}
                      sx={{ marginLeft: "20px" }}
                      name={`checkBox${index}`}
                      // value={input.checkBox}
                      key={`checkBox${index}`}
                      type="text"
                      placeholder={index === 0 ? "title" : `option${index}`}
                    />
                  ))}
                  <Button onClick={() => handleAddInput("checkBox")}>
                    Add
                  </Button>
                </div>
              ) : null}
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
              <button onClick={() => showInputField("button")}>Button</button>

              {add.button ? (
                <div>
                  {[...Array(inputCount.button)].map((_, index) => (
                    <Input
                      onChange={(e) => handleInputChange(e, "button", index)}
                      sx={{
                        marginLeft: "20px",
                        backgroundColor: "black",
                        color: "white",
                      }}
                      name={`button${index}`}
                      // value={input.button}
                      key={`button${index}`}
                      type="text"
                      placeholder={`button${index + 1}`}
                    />
                  ))}
                  <Button onClick={() => handleAddInput("button")}>Add</Button>
                </div>
              ) : null}
            </section>
          </div>
        ) : null}
        <Button onClick={handleSubmit}>Build form</Button>
      </div>
      <div>
        {console.log(post, "post")}
        {post.map((val) => {
          return (
            <>
              {/* <div>{val.textfield[0].textfield0}</div> */}
              {/* <div>{val.radio}</div>
              <div>{val.checkBox}</div>
              <div>{val.button}</div> */}

              <form>
                {val.textfield.length >= 1 && (
                  <div class="form-group" style={{ display: "flex" }}>
                    <label for="exampleInputEmail1" ali>
                      <h3>{val.textfield[0]?.textfield0} :</h3>
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={val.textfield[0]?.textfield0}
                    />
                  </div>
                )}
                {val.textfield.length > 1 && (
                  <div class="form-group" style={{ display: "flex" }}>
                    <label for="exampleInputPassword1">
                      <h3>{val.textfield[1]?.textfield1} :</h3>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder={val.textfield[1]?.textfield1}
                    />
                  </div>
                )}
                {val.textfield.length > 2 && (
                  <div class="form-group" style={{ display: "flex" }}>
                    <label for="exampleInputPassword1">
                      <h3>{val.textfield[2]?.textfield2} :</h3>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder={val.textfield[2]?.textfield2}
                    />
                  </div>
                )}
                <div class="form-group form-check" style={{ display: "flex" }}>
                  {val.radio.length >= 1 && (
                    <label class="form-check-label" for="exampleCheck1">
                      <h3>{val.radio[0]?.radio0} :</h3>
                      &nbsp;&nbsp;&nbsp;
                    </label>
                  )}

                  {val.radio.length > 1 && (
                    <>
                      &nbsp;&nbsp;&nbsp;
                      <span style={{ paddingTop: "20px" }}>
                        {val.radio[1]?.radio1}
                      </span>
                      <input
                        type="radio"
                        class="form-check-input"
                        id="exampleCheck1"
                        style={{marginBottom:"20px"}}
                      />
                      &nbsp;&nbsp;&nbsp;
                    </>
                  )}
                  {val.radio.length > 2 && (
                    <>
                      <span style={{ paddingTop: "20px" }}>
                        {val.radio[2]?.radio2}
                      </span>
                      <input
                        type="radio"
                        class="form-check-input"
                        id="exampleCheck1"
                        style={{marginBottom:"20px"}}
                      />
                    </>
                  )}
                </div>
                <div class="form-group form-check" style={{ display: "flex" }}>
                  {val.checkBox.length >= 1 && (
                    <label class="form-check-label" for="exampleCheck1">
                      <h3>{val.checkBox[0]?.checkBox0} :</h3>
                    </label>
                  )}
                  &nbsp;&nbsp;&nbsp;
                  {val.checkBox.length > 1 && (
                    <>
                      <span style={{ paddingTop: "20px" }}>
                        {val.checkBox[1]?.checkBox1}
                      </span>
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                    </>
                  )}
                  &nbsp;&nbsp;&nbsp;
                  {val.checkBox.length > 2 && (
                    <>
                      <span style={{ paddingTop: "20px" }}>
                        {val.checkBox[2]?.checkBox2}
                      </span>
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck2"
                      />
                    </>
                  )}
                  &nbsp;&nbsp;&nbsp;
                  {val.checkBox.length > 3 && (
                    <>
                      <span style={{ paddingTop: "20px" }}>
                        {val.checkBox[3]?.checkBox3}
                      </span>
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck3"
                      />
                    </>
                  )}
                </div>
                {val.button.length >= 1 && (
                  <Button type="submit" class="btn btn-primary">
                    {val.button[0]?.button0}
                  </Button>
                )}
                {val.button.length > 1 && (
                  <Button type="submit" class="btn btn-primary">
                    {val.button[1]?.button1}
                  </Button>
                )}
                {val.button.length > 2 && (
                  <Button type="submit" class="btn btn-primary">
                    {val.button[2]?.button2}
                  </Button>
                )}
              </form>
            </>
          );
        })}
        {/* {input.textfield.map((textfield, index) => (
          <div key={index}>{Object.values(textfield).join(", ")}</div>
        ))} */}
      </div>
    </>
  );
};

export default Main;
