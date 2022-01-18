import React from "react";

export default function Info() {
  return (
    <section className="section--info">
      <img src={pic} className="info__pic" />
      <div class="info__content">
        <h1 className="info__title">Lee Mander</h1>
        <h2 className="info__subheading">Frontend Web Developer</h2>
        <a href="#">
          <small className="info__site">leemander.com</small>
        </a>
        <div class="info__buttons">
          <button className="info__button">Email</button>
          <button className="info__button info__button--variant">
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}
