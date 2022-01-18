import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

const cards = data.map((item) => {
  return <Card item={item} />;
});

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">{cards}</div>
    </div>
  );
}
