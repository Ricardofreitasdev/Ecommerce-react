import React from "react";
import useStore from "../../hooks/useStore";

export default function Testimonials() {
  const { testimonials } = useStore();

  return (
    <div className="testimonials">
      <div className="container">
        <h2>o que os clientes dizem</h2>
        <div className="testimonials__list">
          {testimonials.map((testimonial) => (
            <div className="testimonials__item" key={testimonial.id}>
              <span className="testimonials__item--name">
                {testimonial.name}
              </span>
              <span className="testimonials__item--description">
                {testimonial.testimonial}
              </span>
              <span className="testimonials__item--date">
                {testimonial.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
