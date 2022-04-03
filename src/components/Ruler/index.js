import React from "react";
import useStore from "../../hooks/useStore";

export default function Ruler() {
  const { ruler, loading } = useStore();

  return (
    <div className="ruler">
      {loading ? (
        "loading..."
      ) : (
        <div className="ruler__wrapper container">
          {ruler.map((item) => (
            <div key={item.id} className="ruler__item">
              <img src={item.icon} alt={item.title} />
              <p>
                <b>{item.title}</b> {item.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
