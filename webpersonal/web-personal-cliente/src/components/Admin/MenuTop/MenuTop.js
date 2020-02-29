import React from "react";
import { Button, Icon, Layout } from "antd";
import latraLogo from "../../../assets/img/png/Lastraico.bmp";
import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapse, setMenuCollapse } = props;
  console.log(props);
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={latraLogo}
          alt="Representaciones Lastra"
        />
        <Button type="link" onClick={console.log("")}>
          <Icon type="menu-fold" />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => setMenuCollapse(!menuCollapse)}>
          <Icon type="poweroff"></Icon>
        </Button>
      </div>
    </div>
  );
}
