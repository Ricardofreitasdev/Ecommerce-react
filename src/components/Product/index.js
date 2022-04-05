import React from "react";

export default function Product({
  id,
  name,
  image,
  price,
  promotionalPrice,
  hot,
  freeShipping,
  discount,
  payment,
}) {
  return (
    <div className="product" data-product-id={id}>
      {discount && <div className="product__discount">{discount}</div>}
      <div className="product__wrapper">
        <img className="product__image" loading="lazy" alt={name} src={image} />
        <div className="product__label">
          {hot !== 0 && <p className="product__label--hot">Lançamento</p>}
          {freeShipping !== 0 && (
            <p className="product__label--shipping">Frete Grátis</p>
          )}
        </div>
      </div>
      <div className="product__infos">
        <h3 className="product__name">{name}</h3>
        <div className="product__price">
          <span className="product__price--original">de R${price}</span>
          <span className="product__price--promotional">
            <b>por R$ {promotionalPrice}</b>
          </span>
          {payment.map((item) => (
            <p className="product__price--installments">
              {item.plots}X de R${item.value} {item.taxes}
            </p>
          ))}
        </div>
      </div>

      <button className="product__spy" type="button">
        espiar
      </button>
      <button className="product__button" type="button">
        <img
          src="/banners/cart_icon.png"
          loading="lazy"
          alt="icone de sacola"
        />
        <p>Adicionar à sacola</p>
      </button>
    </div>
  );
}
