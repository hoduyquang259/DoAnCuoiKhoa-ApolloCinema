import React from "react";
import { Route } from "react-router-dom";
import NavbarAdmin from "../../components/AdminComp/NavbarAdmin";



const LayoutAdminTemplate = (props) => {
  return (
    <>
      <NavbarAdmin />
      {props.children}
    </>
  );
};
const AdminTemplate = (props) => {
  const { exact, path, Component } = props;
  return (
    <LayoutAdminTemplate>
      <Route exact={exact} path={path} component={Component} />
    </LayoutAdminTemplate>
  );
};

export default AdminTemplate;
