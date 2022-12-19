import React, { useState, useEffect } from "react";
import "./PokeCard.css";
import axios from "axios";

export default function PokeCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      {data.map((post) => {
        const { id, title, body } = post;

        return (
          
            <div className="card" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
              
            </div>
          
        );
      })}
    </>
  );
}
