import React from "react";
import useStore from "../../hooks/useStore";
import Cart from "../Cart";

export default function Header() {
  const { logos } = useStore();

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div>search</div>
        <div>
          <img src={logos.header} alt="logo" />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </header>
  );
}
