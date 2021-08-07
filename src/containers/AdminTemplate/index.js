import React from "react";
import { Route,Redirect } from "react-router-dom";
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
    <Route
      {...props}
      render={() => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdminTemplate>
                <Route exact={exact} path={path} component={Component} />
             </LayoutAdminTemplate>
          );
        }
        //Chuyển về trang Auth
        return <Redirect to="/auth" />;
      }}
    />
  );
};

export default AdminTemplate;
