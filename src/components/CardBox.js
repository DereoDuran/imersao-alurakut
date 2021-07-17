import React from "react";
import { CardList, ProfileRelationsBoxWrapper } from "./";

export const CardBox = ({ error, loading, boxTitle, cardList, link }) => {
  return (
    <ProfileRelationsBoxWrapper>
      <a href={link}>
        <h2 className="smallTitle">
          {boxTitle} ({cardList.length})
        </h2>
      </a>
      {error ? (
        <div className="errorTextDiv">Erro ao buscar {boxTitle}.</div>
      ) : loading ? (
        <div className="successTextDiv">Carregando...</div>
      ) : (
        <CardList slice="6" boxTitle={boxTitle} cardList={cardList} />
      )}
    </ProfileRelationsBoxWrapper>
  );
};
