import React from "react";
import { Card } from "./";

export const CardList = ({ cardList }) => {
  return (
    <ul>
      {cardList.slice(0, 6).map((card) => {
        const { title, id } = card
        return <Card key={`card-${title}-${id}`} cardInfo={card} />;
      })}
    </ul>
  );
};
