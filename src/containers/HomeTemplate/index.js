import React from "react";
import { Route } from "react-router-dom";
import Loader from "../../components/Loader";
import NavbarHome from "../../components/HomeComp/NavbarHome";

const LayoutHomeTemplate = (props) => {
  return (
    <>
      <NavbarHome />
      {props.children}
    </>
  );
};
const HomeTemplate = (props) => {
  const { exact, path, Component } = props;
  return (
    <LayoutHomeTemplate>
      <Route exact={exact} path={path} component={Component} />
    </LayoutHomeTemplate>
  );
};

export default HomeTemplate;
