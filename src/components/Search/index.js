import React from "react";

export default function Search() {
  return (
    <>
      <div className="search">
        <input type="text" placeholder="O que deseja encontrar ?" />
        <button type="button">
          <img src="/icons/search.svg" alt="icone de lupa" loading="lazy" />
        </button>
      </div>

      <div className="search__suggestion">
        <div className="search__suggestion--header">
          <span>Sugestões</span>

          <div>
            <p>Brinco</p>
            <p>Brinco Prata</p>
            <p>Brinco Ouro</p>
          </div>
        </div>

        <div className="search__suggestion--body">
          <div className="search__suggestion--item">
            <p>imagem</p>
            <p>descrição produto</p>
          </div>
        </div>
      </div>
    </>
  );
}
