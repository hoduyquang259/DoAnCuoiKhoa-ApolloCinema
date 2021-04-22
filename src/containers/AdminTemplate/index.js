import React from "react";
import { Route, Redirect } from "react-router-dom";

function LayoutAdmin(props) {
  return (
    <>
      <nav>Navbar Admin</nav>
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsComponent} />
            </LayoutAdmin>
          );
        }
        //Đá về trang Auth
        return <Redirect to="/auth" />;
      }}
    />
  );
}
