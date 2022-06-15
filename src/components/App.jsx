import React, { useState } from "react";
import List from "./List";

function App() {
  const [text, setText] = useState("");
  const [add, setAdd] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
  }

  function addList() {
    setAdd((previousItem) => {
      console.log(previousItem);
      return [...previousItem, text];
    });

    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={handleChange} type="text" />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {add.map((item, index) => (
            <List key={index} name={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
