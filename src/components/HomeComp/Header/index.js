import React from "react";
import Slider from "react-slick";

const banner = [
  { urlImg: "/images/header/header-item-1.webp" },
  { urlImg: "/images/header/header-item-2.webp" },
  { urlImg: "/images/header/header-item-3.webp" },
  { urlImg: "/images/header/header-item-4.webp" },
  { urlImg: "/images/header/header-item-5.webp" },
  { urlImg: "/images/header/header-item-6.webp" },
  { urlImg: "/images/header/header-item-7.webp" },
];

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="header">
      <Slider {...settings}>
        {banner &&
          banner.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.urlImg} alt="banner" />
              <div className="content"></div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Header;
