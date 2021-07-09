import { Container } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";

function Carousel() {
  const banners = [
    {
      name: "cuop-bien-vung-caribe",
      src: "/images/banner/cuop-bien-vung-caribe.jpg",
    },
    {
      name: "giam-cam-quy-giu",
      src: "/images/banner/giam-cam-quy-giu.jpg",
    },
    {
      name: "ki-uc-chet",
      src: "/images/banner/ki-uc-chet.jpg",
    },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 3000,
  };
  return (
    <div className="carousel">
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Slider {...settings}>
          {banners ? (
            banners.map((item, index) => (
              <div key={index}>
                <img src={item.src} alt={item.name} />
              </div>
            ))
          ) : (
            <div>...loading</div>
          )}
        </Slider>
      </Container>
    </div>
  );
}

export default Carousel;
