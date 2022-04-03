import React from "react";
import Slider from "react-slick";
import useStore from "../../hooks/useStore";

export default function FullBanner() {
  const { banners, loading } = useStore();
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="fullbanner">
      {loading ? (
        "carregando..."
      ) : (
        <Slider {...settings}>
          {banners.fullbanners.map((banner) => (
            <img
              key={banner.id}
              src={banner.src}
              alt={banner.alt}
              loading="lazy"
            />
          ))}
        </Slider>
      )}
    </div>
  );
}
