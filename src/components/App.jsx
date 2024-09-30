import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  function addItem(inputText) {
    if (inputText.trim() === "") {
      alert("Please enter a valid item.");
      return;
    }
    setError("");
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      <footer>
        <p>Copyright © 2024 | To-Do List</p>
        <p>Made with ❤️ by Viveksingh Negi using ReactJS</p>
      </footer>
    </div>
  );
}

export default App;
