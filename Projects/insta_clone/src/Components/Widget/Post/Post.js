import React, { useEffect, useState } from "react";
import "./Post.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { DateTime } from "luxon";
import moment from "moment"

import axios from "axios";

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  // const [likeCnt , setLikeCnt ] = useState()
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const postRes = await axios
          .get("http://localhost:8000/posts")
          .then((res) => {
            console.log(res);
            setPosts(res?.data);
          });
      } catch (err) {
        console.log(err);
      }
    };

    const fetchAllUsers = async () => {
      await axios
        .get("http://localhost:8000/users")
        .then((res) => {
          setUsers(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchAllLikes = async () => {
      axios
        .get("http://localhost:8000/likes")
        .then((res) => {
          setLikes(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchAllPosts();
    fetchAllUsers();
    fetchAllLikes();
  }, []);

  const likeClicked = async (userId, postId) => {
    axios
      .post("http://localhost:8000/likeclicked", { userId, postId })
      .then(() => {
        axios.get("http://localhost:8000/likes").then((res) => {
          setLikes(res?.data);
          // console.log(res ,"from post 67");
        });
      });
    // await axios.post("http://localhost:8000/likeclicked",{userId,postId})
    // console.log();
    // console.log(userId,postId);
  };

  return (
    <>
      {posts
        ?.slice(0)
        .reverse()
        .map((post) => {
          const user = users.find((user) => user.id === post.userId);
          const like = likes.filter((like) => post.post_id === like.postId);
          // const { DateTime } = require("luxon");
          console.log(like.length, "like");
          const date = DateTime.fromISO(post.post_create_date).toFormat('dd-MM-yyyy').replaceAll("-"," / ")
          const timeAgo = moment(post.post_create_date, "YYYYMMDD").endOf('day').fromNow();
          // console.log(date);
          return (
            <Card
              key={post.post_id}
              sx={{ maxWidth: 400, height: "auto", marginBottom: "30px" }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={`${user?.username}  •  ${timeAgo}`}
                subheader={date}

              />
              <CardContent>
              <Typography variant="body2" color="text.secondary">
                  {post.post_desc}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="auto"
                image={post.post_img}
                alt="PostImage"
              />

              <CardActions disableSpacing sx={{ paddingBottom: 0 }}>
                <IconButton
                  aria-label="add to favorites"
                  style={{ width: "50px" }}
                >
                  <FavoriteIcon
                    onClick={() => {
                      likeClicked(user?.id, post.post_id);
                    }}
                  />
                </IconButton>

                <IconButton aria-label="share" style={{ width: "50px" }}>
                  <ShareIcon />
                </IconButton>
              </CardActions>

              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant="body1">{like.length} likes</Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {post.post_desc}
                </Typography> */}
              </CardContent>
            </Card>
          );
        })}
    </>
  );
}
