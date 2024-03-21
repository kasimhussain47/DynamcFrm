import React, { useReducer } from "react";

const userData = [
  {
    id: 1,
    name: "kunal",
    age: 22,
    admin: false,
  },
  {
    id: 2,
    name: "rounak",
    age: 23,
    admin: false,
  },
  {
    id: 3,
    name: "utkarsh",
    age: 22,
    admin: false,
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
    return state.map((val) => {
        if(val.id === action.id){         
              return { ...val, admin: !val.admin };
        }else{
            return val
        }
    });
    default:
        return state;
  }
};

const DemoTodo = () => {
    const [state, dispatch] = useReducer(reducer, userData);


const handleComplete = (val) => {
  dispatch({ type: "COMPLETE", id: val.id });
};



  return (
    <>
      {state.map((val) => {
        return (
          <div key={val.id} style={{ display: "flex" }}>
            <input type="radio" checked={val.admin} onClick={() => handleComplete(val)} />
            <h3>{val.name}</h3>
            <h3>{val.age}</h3>
          </div>
        );
      })}
    </>
  );
};

export default DemoTodo;
