import React from "react";
import { CardList, ProfileRelationsBoxWrapper } from "./";

export const CardBox = ({ boxTitle, cardList }) => {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {boxTitle} ({cardList.length})
      </h2>
      <CardList cardList={cardList} />
    </ProfileRelationsBoxWrapper>
  );
};
