import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import HomeTemplate from "./containers/HomeTemplate";
import routesHome from "./routes";
import AuthPage from "./containers/Auth";
import PageNotFound from "./containers/PageNotFound/PageNotFound";

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
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome(routesHome)}
        <Route path="/auth/register" component={AuthPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
