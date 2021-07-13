import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { handleScrollElementById } from "../../../utils";

const menus = [
  { label: "DashBoard", url: "/admin/index", id: false },
  { label: "Quản Lý Đặt Vé", url: "/admin/index/ticket-management", id: "ticket" },
  { label: "Quản Lý Người Dùng", url: "/admin/index/user-management", id: "user" },
  { label: "Quản Lý Phim", url: "/admin/index/movie-management", id: "movie" },
  { label: "Quản Lý Rạp", url: "/admin/index/cineplex-management", id: "cineplex" },
];

const NavbarAdmin = () => {
  // const history = useHistory();
  return (
    <div className="navbar-admin">
      <Container>
        <Grid container>
          {/* <Grid item xs={3} className="logo">
            <Link to="/admin/dashboard">
              <img src="/images/logo-web.png" alt="logo" />
              <p>
                Apollo <span>Movie</span>
              </p>
            </Link>
          </Grid> */}
          <Grid item xs={12} className="nav-menu">
            {menus &&
              menus.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  onClick={
                    item.id
                      ? () => {
                          handleScrollElementById(item.id);
                        }
                      : false
                  }
                >
                  {item.label}
                </Link>
              ))}
          </Grid>
          {/* <Grid item xs={3} className="nav-right">
            <Button
              className="btn-register"
              onClick={() => {
                history.push("/auth/register");
              }}
            >
              Register
            </Button>
            <Button
              className="btn-login"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default NavbarAdmin;
