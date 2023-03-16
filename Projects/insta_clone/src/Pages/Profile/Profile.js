import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideMenuBar/SideBar";
import axios from "axios";
import "./Profile.css";
import { useParams } from "react-router-dom";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { red } from "@mui/material/colors";
import {
  Avatar,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userPostCnt, setUserPostCnt] = useState(0);
  const [userInfo, setUserInfo] = useState([]);

  const { userId } = useParams();

  console.log(userId);

  useEffect(() => {
    const fetchAllUsers = async () => {
      await axios
        .get("http://localhost:8000/users")
        .then((res) => {
          setUsers(res?.data);
          return res?.data;
        })
        .then((res) => {
          const temp = res.filter((user) => user?.id === Number(userId));
          setUserInfo(temp);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const fetchAllPosts = async () => {
      await axios
        .get("http://localhost:8000/posts")
        .then((res) => {
          setPosts(res?.data);
          return res?.data;
        })
        .then((res) => {
          const temp = res.filter((p) => p.userId === parseInt(userId));
          setUserPostCnt(temp);
          // console.log(temp.length);
        });
    };

    fetchAllUsers();
    fetchAllPosts();
  }, []);

  console.log(userInfo);
  // console.log(userInfo[0]?.username?.charAt(0).toUpperCase());

  return (
    <div className="profile">
      <SideBar />
      <div className="profileCont">
        <div className="top ">
          <div className="profileImg">
            <Avatar
              sx={{
                bgcolor: red[500],
                fontSize: "100px",
                width: 150,
                height: 150,
              }}
              aria-label="recipe"
            >
              {userInfo[0]?.username?.charAt(0).toUpperCase()}
            </Avatar>
          </div>
          <div className="profile_desc">
            <div className="desc_top">
              <div>
                <Typography variant="h4" color="white">
                  {userInfo[0]?.username}
                </Typography>
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                <Avatar variant="rounded" sx={{ height: 30, width: 30 }}>
                  <EditIcon />
                </Avatar>

                <Avatar variant="rounded" sx={{ height: 30, width: 30 }}>
                  <PersonAddAlt1Icon color="success" />
                </Avatar>
              </div>
            </div>

            <div>
              <Typography variant="h5" color="GrayText">
                Total post : {userPostCnt.length}
              </Typography>
            </div>

            <div>About</div>
          </div>
          <div className="contact">
            <div className="mail contactIcon">
              <EmailIcon />
            </div>
            <div className="twitter contactIcon">
              <TwitterIcon />
            </div>
            <div className="whatsapp contactIcon">
              <WhatsAppIcon />
            </div>
            <div className="facebook contactIcon">
              <FacebookIcon />
            </div>
          </div>
        </div>
        <div className="bottom">
          <ImageList sx={{ width: "70%", height: 500 }} cols={3} rowHeight={200} gap={50}
          >
            {
              posts
                .filter((post) => post.userId === parseInt(userId))
                .map((res) => {
                  return (
                    <ImageListItem key={res.post_img}>
                    <img
                      className="userPost"
                      src={`${res.post_img}?w=248&fit=crop&auto=format`}
                      srcSet={`${res.post_img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={res.post_desc}
                      loading="lazy"
                    />
                  </ImageListItem>
                  );
                })
            }
          </ImageList>
        </div>
      </div>
    </div>
  );
};

export default Profile;
