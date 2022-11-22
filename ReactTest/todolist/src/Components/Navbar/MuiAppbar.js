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

            {/* text color not working */}
            <Tabs value={1} sx={{margin:'auto'}}>
              <Tab label="Home" value={1}/>
              <Tab label="Services" value={2}/>
              <Tab label="Contact Us" value={3}/>
              <Tab label="Abuout Us" value={4}/>
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
