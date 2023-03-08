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

import axios from "axios";

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

    fetchAllPosts();
  }, []);

  return (
    <>
      {posts?.slice(0).reverse().map((post) => {
        return (
          <Card key={post.post_id} sx={{ maxWidth: 400, height: "auto" ,marginBottom:"30px"}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader={post.post_create_date}
            />
            <CardMedia
              component="img"
              height="auto"
              image={post.post_img}
              alt="Paella dish"
            />

            <CardActions disableSpacing sx={{ paddingBottom: 0 }}>
              <IconButton aria-label="add to favorites" style={{width:"50px"}}>
                <FavoriteIcon />
              </IconButton>

              <IconButton aria-label="share" style={{width:"50px"}}>
                <ShareIcon />
              </IconButton>
            </CardActions>

            <CardContent sx={{ paddingTop: 0 }}>
              <Typography variant="body1">2331 likes</Typography>
              <Typography variant="body2" color="text.secondary">
                {post.post_desc}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
