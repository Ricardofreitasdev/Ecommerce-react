import React from "react";

export function PrevArrow({ className, style, onClick }) {
  return (
    <button
      style={{ ...style }}
      onClick={onClick}
      className={className}
      type="button"
    >
      <img src="/icons/arrow-left.svg" alt="seta voltar" loading="lazy" />
    </button>
  );
}

export function NextArrow({ className, style, onClick }) {
  return (
    <button
      style={{ ...style }}
      onClick={onClick}
      className={className}
      type="button"
    >
      <img src="/icons/arrow-right.svg" alt="seta voltar" loading="lazy" />
    </button>
  );
}
