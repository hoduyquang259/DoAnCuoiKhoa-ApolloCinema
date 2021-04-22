import React from "react";
import NavbarHome from "./../../components/NavbarHome";
import { Route } from "react-router-dom";

function LayoutHome(props) {
  return (
    <>
      <NavbarHome />
      {props.children}
    </>
  );
}

export default function HomeTemplate(props) {
  const { exact, path, Component } = props;
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={Component} />
    </LayoutHome>
  );
}
