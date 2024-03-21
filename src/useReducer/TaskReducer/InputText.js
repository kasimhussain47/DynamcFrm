import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./Reducer";
import { Button } from "@mui/material";
const InputText = () => {
  const [text, setText] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      if (text === "") return;
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Math.random(),
          text: text,
        },
      });
      setText("");
    }
  };

  const handleEdit = (id) => {
    let newEditItem = state.todos.find((data) => {
        // console.log(data);
        return data.id === id;
      });    
      console.log(newEditItem);
      // let Edited = newEditItem.text
        setText(newEditItem.text);
  };

  function handleUpdate(id) {
    console.log(text)
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        id,
        text: text,
      },
    });
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add todo..."
        onKeyUp={handleKeyUp}
      />

      {Object.keys(state.todos).length === 0 ? (
        <p>Todo empty !!</p>
        ) : (
          state.todos.map((item) => (
            <div style={style.list} key={item.id}>
            <p style={{ marginRight: 20 }}>{item.text}</p>
            <button style={style.del} onClick={() => handleDelete(item.id)}>
              x
            </button>
            <button style={style.del} onClick={() => handleEdit(item.id)}>
              Edit
            </button>
            <Button onClick={() => handleUpdate(item.id)}>Update</Button>
            
          </div>
        ))
      )}
    </>
  );
};

const style = {
  list: { display: "flex", alignItems: "center", justifyContent: "center" },
  del: {
    width: 40,
    height: 40,
    borderRadius: 10,
    lineHeight: "40px",
    backgroundColor: "gold",
  },
};

export default InputText;
