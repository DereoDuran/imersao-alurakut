import React from "react";
import { Card } from "./";

export const CardList = ({ cardList, boxTitle, slice }) => {

  return (
    <ul key={`${boxTitle}`}>
      {cardList.slice(0, slice || cardList.length).map((card) => {
        const { title, id } = card;
        return <Card slice={slice} key={`card-${title}-${id}`} cardInfo={card} />;
      })}
    </ul>
  );
};
