import { ReactElement, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

import "./header.scss";
import logoImage from "../../assets/logo.svg";
import notificationImage from "../../assets/notification.svg";
import settingImage from "../../assets/setting.svg";
import SearchInput from "../search-input";
import userImage from "../../assets/user.svg";
import arrowImage from "../../assets/arrow-down.svg";
import searchImage from "../../assets/search.svg";
import { Drawer } from "antd";
import SideBar from "../sidebar";

const Header: React.FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false)

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="header-container flex justify-space-between wrap">
      <div className="logo flex">
        <MenuOutlined onClick={() => setOpen(true)} />
        <img src={logoImage} alt="KAMCO" />
        <p className="flex align-center">Customers</p>
      </div>
      <div className="user flex align-center">
        <div className="search flex">
          <SearchInput
            prefix={<img src={searchImage} alt="search" />}
            placeholder="Search"
          />
        </div>
        <div className="account flex align-center">
          <div className="images flex align-center">
            <img src={settingImage} alt="setting" />
            <img src={notificationImage} alt="notification" />
          </div>
          <div className="name flex align-center">
            <img src={userImage} alt="user-image" />
            <p>Jacob Gillespie</p>
            <img src={arrowImage} alt="arrow-down-icon" />
          </div>
        </div>
      </div>
      <Drawer destroyOnClose={true} maskClosable={true} onClose={closeDrawer} placement="left" open={open}>
        <SideBar />
      </Drawer>
    </div>
  );
};

export default Header;
