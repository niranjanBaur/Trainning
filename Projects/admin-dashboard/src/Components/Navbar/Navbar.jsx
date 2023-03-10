import "./navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchRoundedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeRoundedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitRoundedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsRoundedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRoundedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListRoundedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Profile_Pic"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
