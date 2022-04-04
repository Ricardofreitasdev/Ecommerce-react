import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import useStore from "../../hooks/useStore";
import Cart from "../Cart";

export default function Header() {
  const { logos } = useStore();
  const { categories } = useStore();
  const { price } = useContext(CartContext);

  const [OpenMenu, setOpenMenu] = useState(false);

  function menu() {
    setOpenMenu(!OpenMenu);
  }

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__search">search</div>

        <div className="header__nav-mobile">
          <button type="button" onClick={() => menu()}>
            <img src="/icons/menu_hamburger.svg" alt="botao menu" />
          </button>
        </div>

        <div className="header__logo">
          <h1 className="header__name">E-commerce com React</h1>
          <a href="/">
            <img src={logos.header} alt="logo" />
          </a>
        </div>
        <div className="header__infos">
          <div className="header__infos--wrapper">
            <span>minha conta</span>
            <span>fone</span>
          </div>
          <Cart />
          <span>{price}</span>
        </div>
      </div>

      <div className={OpenMenu ? "header__mobile open" : "header__mobile"}>
        <div className="header__mobile--wrapper">
          <p>Entrar</p>
          <p>Cadastrar</p>
          <ul>
            {categories.map((categorie) => (
              <li key={categorie.id}>
                <p>{categorie.name}</p>
              </li>
            ))}
          </ul>
          <button
            className="header__mobile--close"
            type="button"
            onClick={() => menu()}
          >
            <img src="/icons/close.svg" alt="botao menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
