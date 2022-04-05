import React from "react";

export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="O que deseja encontrar ?" />
      <button type="button">
        <img src="/icons/search.svg" alt="icone de lupa" loading="lazy" />
      </button>
    </div>
  );
}
