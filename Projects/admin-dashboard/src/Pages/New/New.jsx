import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./new.scss";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");

  // console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left"> 
            <input type="file" id="file" onChange={e=> setFile(e.target.files[0])} style={{ display: "none" }} />
            <label htmlFor="file">
              {file ? <img src={URL.createObjectURL(file)} alt="image" className="insertIcon"/> : <InsertPhotoIcon className="insertIcon"/>} 
           </label>
            <h3>{file ? "" :"Click to insert image"} </h3>
          </div>
          <div className="right">
            <form>
              {inputs.map((input) => {
                return(
                  <div key={input.id} className="formInput">
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
                )
              })}

              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
