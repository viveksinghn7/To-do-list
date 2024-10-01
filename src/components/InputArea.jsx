import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      props.onAdd(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
