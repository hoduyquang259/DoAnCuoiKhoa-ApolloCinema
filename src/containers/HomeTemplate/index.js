import React from "react";
import NavbarHome from "./../../components/NavbarHome";
import { Route } from "react-router-dom";
import Footer from "components/Footer/Footer";

function LayoutHome(props) {
  return <>{props.children}</>;
}

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <LayoutHome>
      <NavbarHome />
      <Route exact={exact} path={path} component={component} />
      <Footer />
    </LayoutHome>
  );
}
