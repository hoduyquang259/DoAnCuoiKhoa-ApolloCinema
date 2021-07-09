import { Container, Divider, Grid } from "@material-ui/core";
import { Facebook, Telegram, Twitter } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styleSCSS from "./Footer.module.scss";

function Footer() {
  const partners = [
    {
      url: "/images/partner/lotte.jpg",
      link: "https://www.lottecinemavn.com/LCHS/index.aspx",
    },
    { url: "/images/partner/cgv.jpg", link: "https://www.cgv.vn/" },
    { url: "/images/partner/galaxy.png", link: "https://www.galaxycine.vn/" },
    { url: "/images/partner/cinemax.jpg", link: "https://cinemaxvn.com/" },
    {
      url: "/images/partner/vietinbank.jpg",
      link: "https://www.vietinbank.vn/web/home/vn/index.html",
    },
    {
      url: "/images/partner/vietcombank.jpg",
      link: "https://portal.vietcombank.com.vn/Pages/Home.aspx?devicechannel=default",
    },
    {
      url: "/images/partner/techcombank.png",
      link: "https://www.techcombank.com.vn/trang-chu",
    },
    { url: "/images/partner/momo.png", link: "https://momo.vn/" },
  ];
  return (
    <div className={styleSCSS.footer}>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={3}>
            <h3>About US</h3>
            <hr className={styleSCSS.divider} />
            <Link className={styleSCSS.link}>
              <p>Business Contacts</p>
            </Link>
            <Link className={styleSCSS.link}>
              <p>Announcements</p>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <h3>Social</h3>
            <hr className={styleSCSS.divider} />
            <Link className={styleSCSS.link}>
              <p>
                <Facebook /> Facebook
              </p>
            </Link>
            <Link className={styleSCSS.link}>
              <p>
                <Telegram /> Telegram
              </p>
            </Link>
            <Link className={styleSCSS.link}>
              <p>
                <Twitter /> Twitter
              </p>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <h3>Partner</h3>
            <hr className={styleSCSS.divider} />
            <Grid container>
              {partners
                ? partners.map((item, index) => (
                    <Grid item xs={3}>
                      <a
                        href={item.link}
                        className={styleSCSS.symbol_partner}
                        Target="_blank"
                      >
                        <img src={item.url} alt={index} />
                      </a>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <h6>@2021 Nguyen Tan Thanh | Duy Quang</h6>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
