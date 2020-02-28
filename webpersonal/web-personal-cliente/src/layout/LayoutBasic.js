import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";

import "./LayoutBasic.scss";
export default function LayoutBasic(props) {
  console.log(props);
  const { routes } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu....</h2>
      <Layout>
        <Content>
          <LoadRouters routes={routes} />
        </Content>
        <Footer>Miguel angel quintero Giraldo - Lastra</Footer>
      </Layout>
    </Layout>
  );
}
//genere rutas hijas
function LoadRouters({ routes }) {
  console.log(routes);
  return routes.map((route, index) => (
    <Route
      key={index}
      route={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
