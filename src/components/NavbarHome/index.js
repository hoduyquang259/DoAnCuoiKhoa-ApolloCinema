import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { NavLink, Link } from "react-router-dom";
import BtnLanguages from "../BtnsLanguages/BtnsLanguages";
import styleSCSS from "./NavbarHome.module.scss";
function NavbarHome() {
  const { lang } = useParams();
  const menus = [
    { title: "home", url: `/${lang}/home` },
    { title: "movie", url: `/${lang}/home/#movie` },
    { title: "cinema", url: `/${lang}/home/#cinema` },
    { title: "app", url: `/${lang}/home/#app` },
  ];
  return (
    <div className={styleSCSS.navbar_home}>
      <div className={styleSCSS.Container_root}>
        <Grid container>
          <Grid item xs={2} className={styleSCSS.box_logo}>
            <Link className="text-decoration-none" to="/">
              <img src="/images/apollo-logo.png" alt="logo-web" />
              <span>ollo</span>
            </Link>
          </Grid>
          <Grid item xs={7} className={styleSCSS.box_menu}>
            {menus
              ? menus.map((item, index) => (
                  <Link key={index} to={item.url} className={styleSCSS.txt_tit}>
                    {item.title}
                  </Link>
                ))
              : null}
          </Grid>
          <Grid item xs={3}>
            <NavLink
              className={`${styleSCSS.btn_register} ${styleSCSS.button} "text-decoration-none"`}
              to="/sign-up"
            >
              Register
            </NavLink>
            <NavLink
              className={`${styleSCSS.btn_login} ${styleSCSS.button} "text-decoration-none"`}
              to="/sign-in"
            >
              Login
            </NavLink>
            <BtnLanguages />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default NavbarHome;
