import React from "react";
import Slider from "react-slick";
import useStore from "../../hooks/useStore";
import Product from "../Product";

export default function Showcase() {
  const { products } = useStore();

  const settings = {
    dots: false,
    arrows: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </Slider>
    </div>
  );
}
