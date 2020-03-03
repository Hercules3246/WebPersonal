import React from "react";
import { Button, Icon, Layout } from "antd";
import { Link } from "react-router-dom";
import latraLogo from "../../../assets/img/png/Lastraico.bmp";
import "./MenuTop.scss";
import "../../../";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const redirect = Link;
  console.log(menuCollapsed);
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to={"/admin"}>
          <img
            className="menu-top__left-logo"
            src={latraLogo}
            alt="Representaciones Lastra"
          />
        </Link>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={console.log("Desconexion")}>
          <Icon type="poweroff"></Icon>
        </Button>
      </div>
    </div>
  );
}
