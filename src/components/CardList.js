import React from "react";
import { Card } from "./";

export const CardList = ({ cardList }) => {
  return (
    <ul>
      {cardList.slice(0, 6).map((card) => {
        const { title } = card
        return <Card key={`card-${title}`} cardInfo={card} />;
      })}
    </ul>
  );
};
