import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop/MenuTop";
import MenuSidebar from "../components/Admin/MenuSidebar/MenuSidebar";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { menuCollapsed, setMenuCollapsed } = useState(true);
  const { Header, Content, Footer } = Layout;
  console.log("");
  return (
    <Layout>
      <MenuSidebar menuCollapsed={menuCollapsed} />
      <Layout className="Layout-admin">
        <Header className="Layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="Layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="Layout-admin__footer">
          Miguel Angel Quintero Giraldo - Lastra
        </Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
