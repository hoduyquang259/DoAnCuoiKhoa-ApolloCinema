import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import HomeTemplate from "./containers/HomeTemplate";
import { routesAdmin, routesHome } from "./routes";
import PageNotFound from "./containers/PageNotFound/PageNotFound";
import AdminTemplate from "./containers/AdminTemplate";
import Login from "./components/Login";
import AuthPage from "./components/AdminComp/AuthPage";

function App() {
  const renderRoutesHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={route.exact}
            path={route.path}
            Component={route.component}
          />
        );
      });
    }
  };
  const renderRoutesAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={route.exact}
            path={route.path}
            Component={route.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome(routesHome)}
        {renderRoutesAdmin(routesAdmin)}
        <Route path="/auth" component={AuthPage}/>
        <Route path="/auth/login" component={Login} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
