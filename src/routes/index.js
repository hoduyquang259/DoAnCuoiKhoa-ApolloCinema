import HomePage from "./../containers/HomeTemplate/HomePage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import Dashboard from "../containers/AdminTemplate/DashboardPage";
import AddUserPage from "../containers/AdminTemplate/AddUserPage";
import SignUpScreen from "containers/HomeTemplate/SignUp";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoviePage,
  },
  {
    exact: false,
    path: "/sign-up",
    component: SignUpScreen,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
  },
];

export { routesHome, routesAdmin };
