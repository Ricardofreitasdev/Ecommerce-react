import React, { useState } from "react";
import useStore from "../../hooks/useStore";
import Cart from "../Cart";
import MenuCategories from "../MenuCategories";
import Search from "../Search";

export default function Header() {
  const { logos } = useStore();
  const { categories } = useStore();

  const [OpenMenu, setOpenMenu] = useState(false);

  function menu() {
    setOpenMenu(!OpenMenu);
  }

  return (
    <>
      <header className="header">
        <div className="header__wrapper container">
          <div className="header__search">
            <Search />
          </div>

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
            <div className="header__login">
              <div className="header__login__item">
                <img src="/icons/user.svg" alt="user" />
                <p>Minha Conta</p>
              </div>
              <div className="header__login__item">
                <img src="/icons/telephone.svg" alt="telefone" />
                <p>(99) 99999-9999</p>
              </div>
            </div>
            <Cart />
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
      <MenuCategories />
    </>
  );
}
