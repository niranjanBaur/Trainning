import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

import "./single.scss";
import List from "../../Components/Table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="SingleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title"> Information</h1>
            <div className="item">
              <img
                src="https://robohash.org/hicveldicta.png"
                alt=""
                className="itemImg"
              />
            </div>
          </div>
          <div className="right">
            <div className="details">
              <h1 className="itemTitle">John Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email : </span>
                <span className="itemValue">atuny0@sohu.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone Number : </span>
                <span className="itemValue">+01 234 567 89</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address : </span>
                <span className="itemValue">745 T Street Southeast , Washington , 20020</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Email : </span>
                <span className="itemValue">atuny0@sohu.com</span>
              </div>
            </div>

            <div className="contact">
              <div className="mail"><EmailIcon/></div>
              <div className="twitter"><TwitterIcon/></div>
              <div className="whatsapp"><WhatsAppIcon/></div>
              <div className="facebook"><FacebookIcon/></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="title">
            Last Transaction
          </div>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
