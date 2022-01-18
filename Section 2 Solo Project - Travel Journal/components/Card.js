import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <section className="card">
      <img className="card__img" src={props.item.img} />
      <div class="card__text">
        <h2 className="card__title">{props.item.title}</h2>

        <div className="card__info">
          <span className="info__country">📍{props.item.country}</span>
          <a
            className="info__maps-link"
            target="_blank"
            href={props.item.mapsLink}
          >
            View on Google Maps
          </a>
        </div>
        <p className="card__date">{props.item.date}</p>
        <p className="card__body">{props.item.body}</p>
      </div>
    </section>
  );
}
