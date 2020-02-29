import React from "react";
import { Link } from "react-router-dom";
import { Layout, Icon, Menu } from "antd";

import "./MenuSidebar.scss";
import MenuItem from "antd/lib/menu/MenuItem";

export default function MenuSidebar(props) {
  const { menuCollapsed } = props;
  console.log(props);
  const { Sider } = Layout;
  return (
    <Sider className="admin-siderbar" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <MenuItem key="1">
          <Link to={"/admin"}>
            <Icon type="home" />
            <span className="nav-text">Home</span>
          </Link>
        </MenuItem>
        <MenuItem key="2">
          <Link to={"/admin/menu-web"}>
            <Icon type="menu" />
            <span className="nac-text">Menu Web</span>
          </Link>
        </MenuItem>
      </Menu>
    </Sider>
  );
}
