import {
  AppBar,
  Typography,
  CssBaseline,
  Toolbar,
  Tab,
  Tabs,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import React, { Component } from "react";
import MuiButtons from "../Button/MuiButtons";
// import MuiButtons from "./MuiButtons";

export default class MuiAppbar extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <AppBar position="static" sx={{ background: "#1f2a63" }}>
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6" sx={{marginLeft:'10px'}}>Photo Album</Typography>

            {/* text color is not working */}
            <Tabs textColor="#fff" sx={{margin:'auto'}}>
              <Tab label="Home" />
              <Tab label="Services" />
              <Tab label="Contact Us" />
              <Tab label="Abuout Us" />
            </Tabs>

            <MuiButtons title = "Login"/>
            <MuiButtons title = "Sign Up"/>

           {/* <Button variant="contained">Login</Button>
           <Button variant="contained">Sign Up</Button> */}
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
