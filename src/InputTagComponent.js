// import React, { useState } from 'react';

// function InputTagComponent() {
//   const [inputCount, setInputCount] = useState(1);

//   const handleAddInput = () => {
//     setInputCount(prevCount => prevCount + 1);
//   };

//   return (
//     <div>
//       {[...Array(inputCount)].map((index) => (
//         <input key={index} type="text" placeholder={`Input ${index + 1}`} />
//       ))}
//       <button onClick={handleAddInput}>Add Input</button>
//     </div>
//   );
// }

// export default InputTagComponent;




// import React, { useState } from 'react';

// const InputTagComponent = () => {
//   const [inputCount, setInputCount] = useState({
//     textfield: 0,
//     radio: 0,
//     checkBox: 0,
//     button: 0
//   });

//   const handleAddInput = (inputType) => {
//     setInputCount(prevState => ({
//       ...prevState,
//       [inputType]: prevState[inputType] + 1
//     }));
//   };

//   return (
//     <div>
//       <button onClick={() => handleAddInput('textfield')}>Add Textfield</button>
//       <button onClick={() => handleAddInput('radio')}>Add Radio</button>
//       <button onClick={() => handleAddInput('checkBox')}>Add Checkbox</button>
//       <button onClick={() => handleAddInput('button')}>Add Button</button>

//       <div>
//         {/* Render inputs based on count */}
//         {[...Array(inputCount.textfield)].map((_, index) => (
//           <input type="text" key={`textfield-${index}`} placeholder={`textfield-${index}`} />
//         ))}
//         {[...Array(inputCount.radio)].map((_, index) => (
//           <input type="radio" key={`radio-${index}`} />
//         ))}
//         {[...Array(inputCount.checkBox)].map((_, index) => (
//           <input type="checkbox" key={`checkbox-${index}`} />
//         ))}
//         {[...Array(inputCount.button)].map((_, index) => (
//           <button key={`button-${index}`}>Button</button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InputTagComponent;



// import React, { useState } from 'react';

// const InputTagComponent = () => {
//   const [inputCount, setInputCount] = useState({
//     textfield: 0,
//     radio: 0,
//     checkBox: 0,
//     button: 0,
//   });

//   const handleAddInput = (type) => {
//     setInputCount(prevState => ({
//       ...prevState,
//       [type]: prevState[type] + 1,
//     }));
//   };

//   const handleInputChange = (e, type) => {
//     // Handle input change here
//   };

//   return (
//     <div>
//       <button onClick={() => handleAddInput('textfield')}>Add Textfield</button>
//       <button onClick={() => handleAddInput('radio')}>Add Radio</button>
//       <button onClick={() => handleAddInput('checkBox')}>Add Checkbox</button>
//       <button onClick={() => handleAddInput('button')}>Add Button</button>

//       {[...Array(inputCount.textfield)].map((_, index) => (
//         <input
//           key={`textfield-${index}`}
//           type="text"
//           onChange={(e) => handleInputChange(e, 'textfield')}
//           // Add other attributes as needed
//         />
//       ))}

//       {[...Array(inputCount.radio)].map((_, index) => (
//         <input
//           key={`radio-${index}`}
//           type="radio"
//           onChange={(e) => handleInputChange(e, 'radio')}
//           // Add other attributes as needed
//         />
//       ))}

//       {[...Array(inputCount.checkBox)].map((_, index) => (
//         <input
//           key={`checkBox-${index}`}
//           type="checkbox"
//           onChange={(e) => handleInputChange(e, 'checkBox')}
//           // Add other attributes as needed
//         />
//       ))}

//       {[...Array(inputCount.button)].map((_, index) => (
//         <button
//           key={`button-${index}`}
//           onClick={() => handleAddInput('button')}
//           // Add other attributes as needed
//         >
//           Button {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default InputTagComponent;



import { Button, Input } from "@mui/material";
import React, { useState } from "react";

const InputTagComponent = () => {
  const [add, setAdd] = useState({
    main: false,
    textfield: false,
    radio: false,
    checkBox: false,
    button: false,
  });

  const [inputCount, setInputCount] = useState({
    textfield: 1,
    radio: 1,
    checkBox: 1,
    button: 1,
  });

  const [inputs, setInputs] = useState({
    textfield: [],
    radio: [],
    checkBox: [],
    button: [],
  });

  const showInputField = (field) => {
    setAdd({ ...add, [field]: true });
  };

  const handleAddInput = (field) => {
    setInputCount((prevState) => ({
      ...prevState,
      [field]: prevState[field] + 1,
    }));
  };

  const handleInputChange = (e, field, index) => {
    const { name, value } = e.target;
    const updatedInputs = [...inputs[field]];
    updatedInputs[index] = { ...updatedInputs[index], [name]: value };
    setInputs({ ...inputs, [field]: updatedInputs });
  };

  const handleSubmit = () => {
    console.log(inputs, "kkk");
    // Handle form submission here
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
        {add.main && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <section style={{ display: "flex", flexDirection: "row" }}>
              <button onClick={() => showInputField("textfield")}>Textfield</button>
              {add.textfield && (
                <div>
                  {[...Array(inputCount.textfield)].map((_, index) => (
                    <Input
                      key={`textfield-${index}`}
                      name={`textfield-${index}`}
                      onChange={(e) => handleInputChange(e, "textfield", index)}
                      sx={{ marginLeft: "20px" }}
                      type="text"
                      placeholder={`textfield-${index + 1}`}
                    />
                  ))}
                  <Button onClick={() => handleAddInput("textfield")}>Add</Button>
                </div>
              )}
            </section>
            {/* Other field sections can follow the same pattern */}
          </div>
        )}
        <Button onClick={handleSubmit}>Build form</Button>
      </div>
      {/* Display form data */}
      <div>
        {inputs.textfield.map((field, index) => (
          <div key={index}>{Object.values(field).join(", ")}</div>
        ))}
        {/* Display other fields similarly */}
      </div>
    </>
  );
};

export default InputTagComponent;
