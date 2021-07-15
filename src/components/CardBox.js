import React from "react";
import { CardList, ProfileRelationsBoxWrapper } from "./";

export const CardBox = ({ error, loading, boxTitle, cardList }) => {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {boxTitle} ({cardList.length})
      </h2>
      {error ? (
        <div className="errorTextDiv">Erro ao buscar {boxTitle}.</div>
      ) : loading ? (
        <div className="successTextDiv">Carregando...</div>
      ) : (
        <CardList cardList={cardList} />
      )}
    </ProfileRelationsBoxWrapper>
  );
};
