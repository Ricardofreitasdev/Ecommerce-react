import React from "react";
import useStore from "../../hooks/useStore";

export default function MenuCategories() {
  const { categories } = useStore();

  return (
    <nav className="categories">
      <ul className="categories__list container">
        {categories.map((categorie) => (
          <div key={categorie.id}>
            <li className="categorie__level1">
              <p>{categorie.name}</p>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}
