import LayoutAdmin from "../layout/LayoutAdmin";
import LayoutBasic from "../layout/LayoutBasic";

//Admin pages
import AdminHome from "../pages/admin/admin";
import AdminSingIn from "../pages/admin/SignIn";

//PAGES
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const routes = [
  {
    path: "/admin",
    exact: false,
    component: LayoutAdmin,
    routes: [
      {
        path: "/admin",
        exact: true,
        component: AdminHome
      },
      {
        path: "/admin/login",
        exact: true,
        component: AdminSingIn
      }
    ]
  },
  {
    path: "/",
    exact: false,
    component: LayoutBasic,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true
      },
      {
        path: "/contact",
        component: Contact,
        exact: true
      }
    ]
  }
];

export default routes;
