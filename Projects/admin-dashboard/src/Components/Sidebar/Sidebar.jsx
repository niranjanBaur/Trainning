import "./sidebar.scss";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { Link } from "react-router-dom";

const Sidebar = () => {

  


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardRoundedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonRoundedIcon className="icon" />
              <span>User</span>
            </li>
          </Link>

          <Link to="/product" style={{ textDecoration: "none" }}>
            <li>
              <StoreMallDirectoryRoundedIcon className="icon" />
              <span>Product</span>
            </li>
          </Link>

          <li>
            <CreditCardRoundedIcon className="icon" />
            <span>Order</span>
          </li>
          <li>
            <LocalShippingRoundedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <BarChartRoundedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveRoundedIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <HealthAndSafetyRoundedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyRoundedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <PersonRoundedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
