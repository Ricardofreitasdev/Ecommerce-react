import React from "react";

export default function MiddleBanner() {
  return (
    <div className="middlebanner container">
      <div className="middlebanner__item">
        <h3>Novidades</h3>
        <img
          src="/banners/middle-banner-novidades.png"
          alt="banner novidades"
        />
      </div>
      <div className="middlebanner__item">
        <h3>destaques</h3>
        <img src="/banners/middle-banner-destaque.png" alt="banner novidades" />
      </div>
    </div>
  );
}
