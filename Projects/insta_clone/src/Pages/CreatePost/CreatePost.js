// import { Card } from "@material-ui/core";
import React, { useState } from "react";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import SideBar from "../../Components/SideMenuBar/SideBar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CircularProgress from "@mui/material/CircularProgress";

import "./CreatePost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { CloudinaryImage } from "@cloudinary/url-gen";

const CreatePost = () => {
  const [file, setFile] = useState("");

  // const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const navigate = useNavigate();

  // console.log(file);

  let x = sessionStorage.getItem("userID");
  x = parseInt(x);

  console.log(typeof x);

  const onSubmit = (e) => {
    e.preventDefault();

    if (file && description) {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", "reig0yyz");

      setLoading(true);

      axios
        .post(
          "https://api.cloudinary.com/v1_1/ds76rallc/image/upload",
          formData
        )
        .then((res) => {
          // console.log(res.data);
          // console.log("hello");
          const url = res?.data.secure_url;
          // const createdDate = res?.data.created_at;
          // console.log(typeof  res?.data.created_at , "from createPost 60");
          var currentdate = new Date();
          var datetime =
            currentdate.getFullYear() +
            "-" +
            (currentdate.getMonth() + 1) +
            "-" +
            currentdate.getDate() +
            " " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();
          const createdDate = datetime;
          let userID = sessionStorage.getItem("userID");
          userID = parseInt(userID);
          // console.log(url);
          // console.log(userID);

          axios
            .post("http://localhost:8000/createpost", {
              url,
              description,
              createdDate,
              userID,
            })
            .then((res) => {
              setLoading(false);
              // console.log(res);
              navigate("/");
            });
        });
    }
  };

  return (
    <div className="CreatePost">
      <SideBar />
      <div className="createPostCont">
        <div className="card">
          <div className="top">
            <div className="left">
              <input
                type="file"
                id="file"
                name="img"
                required
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  // console.log(56, e);
                  setFile(e.target.files[0]);
                }}
                style={{ display: "none" }}
              />
              <label htmlFor="file">
                {file ? (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img
                    src={URL.createObjectURL(file)}
                    alt="image"
                    className="insertIcon"
                  />
                ) : (
                  <InsertPhotoIcon
                    style={{ width: "150px", height: "150px" }}
                    className="insertIcon"
                  />
                )}
              </label>
              <h6>{file ? "" : "Click to insert image"} </h6>
            </div>

            <div className="right">
              <textarea
                cols="30"
                rows="10"
                required
                name="description"
                placeholder="Description"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="bottom">
            <button
              className="postBtn"
              onClick={onSubmit}
              style={{ borderRadius: "5px" }}
            >
              {loading ? <CircularProgress size={20} thickness={4} /> : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
