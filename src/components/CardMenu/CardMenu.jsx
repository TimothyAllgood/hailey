import React from "react";
import { cardItems } from "./config/cardItems";
import "./CardMenu.css";
import CardItem from "./CardItem/CardItem";

function CardMenu() {
  return (
    <section className="card-menu">
      {cardItems.map((cardItem) => {
        return <CardItem key={cardItem.num} item={cardItem} />;
      })}
    </section>
  );
}

export default CardMenu;
