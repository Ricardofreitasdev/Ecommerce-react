import React from "react";
import useStore from "../../hooks/useStore";
import "./grid.scss";

export default function GridBanners() {
  const { banners, loading } = useStore();

  return (
    <div className="container">
      {loading ? (
        "carregando..."
      ) : (
        <div className="grid">
          {banners.grid.map((banner, index) => (
            <div
              key={banner.id}
              className={
                index === 4 ? "grid__item grid__item--vertical" : "grid__item"
              }
            >
              <img src={banner.src} alt={banner.name} loading="lazy" />
              <h4>{banner.name}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
