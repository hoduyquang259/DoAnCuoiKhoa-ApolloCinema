import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { handleScrollElementById } from "../../../utils";

const menus = [
  { label: "Home", url: "/", id: false },
  { label: "Movie", url: false, id: "movie" },
  { label: "Cinema", url: false, id: "cinema" },
  { label: "App", url: false, id: "app" },
];

const NavbarHome = () => {
  const history = useHistory();
  return (
    <div className="navbar-home">
      <Container>
        <Grid container>
          <Grid item xs={3} className="logo">
            <Link to="/">
              <img src="/images/logo-web.png" alt="logo" />
              <p>
                Apollo <span>Movie</span>
              </p>
            </Link>
          </Grid>
          <Grid item xs={6} className="nav-menu">
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
          <Grid item xs={3} className="nav-right">
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
                history.push("/auth");
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NavbarHome;
