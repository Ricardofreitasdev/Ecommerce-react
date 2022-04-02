import React from "react";

export default function Product({ id, name, image, price, promotionalPrice }) {
  function addToCard(productId, value) {
    console.log(productId, value);
  }

  return (
    <div className="product" data-product-id={id}>
      <img className="product__image" loading="lazy" alt={name} src={image} />
      <h3 className="product__name">{name}</h3>
      <span className="product__price--original">de R${price}</span>
      <span className="product__price--promotional">
        por R$ {promotionalPrice}
      </span>
      <button
        className="product__button"
        type="button"
        onClick={() => addToCard(id, promotionalPrice)}
      >
        Adicionar a sacola
      </button>
    </div>
  );
}
