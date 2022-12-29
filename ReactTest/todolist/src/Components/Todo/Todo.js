import React, { useState } from "react";
import "./Todo.css";

export default function Todo() {
  
  const [input, setInput] = useState("");

  const [item, setItem] = useState([]);


  const addItem = () => {
    if (!input) {
    } else {
      setItem([...item, input]);
      setInput("");
    }
  };

  const deleteItem = (id) => {
    const updatedItem = item.filter((ele,ind)=>{
        return (ind!==id)
    })

    setItem(updatedItem)
  }

  const delAll = () => {
    setItem([]);
  }
  return (
    <>
      <div className="main">
        <div className="child">
          <h1>Todo List</h1>

          <figure>
            <img src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png" alt="test" />
            <figcaption>
              <h4>Save your todos here</h4>
            </figcaption>
          </figure>

          <div className="addItems">
            <input
            placeholder="Type here"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addItem}>+</button>
          </div>

          <div className="showItems">
            {item.map((ele, ind) => {
                return(
                  <div className="eachItems" key={ind}>
                    <h3>{ele}</h3>
                    <button onClick={() => deleteItem(ind)}>X</button>
                    <button onClick={() => deleteItem(ind)}>X</button>
                  </div>
                )
            })}
          </div>

          <div className="delAll">
            <button onClick={delAll}>Delete All</button>
          </div>
        </div>
      </div>
    </>
  );
}
