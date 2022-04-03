import React from "react";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter__title">
          <h2>Receba ofertas e novidades</h2>
          <h4>Cadastre-se e receba nossas novidades e promoções</h4>
        </div>
        <form className="newsletter__form">
          <input
            className="newsletter__form--name"
            type="text"
            placeholder="Seu nome"
          />
          <input
            className="newsletter__form--email"
            type="email"
            placeholder="Seu e-mail"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
