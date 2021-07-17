import React from "react";
import { CardList, LayoutBoxWrapper } from "./";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export const CardDiv = ({
  error,
  loading,
  boxTitle,
  cardList,
  filter,
  setFilter,
  filterText,
}) => {
  return (
    <LayoutBoxWrapper>
      <div className="cardDiv">
        <div>
        <h2 className="smallTitle">
          {boxTitle} ({cardList.length})
        </h2></div>
        {filterText && (
          <FormControlLabel
            control={<Checkbox onChange={() => setFilter(!filter)} />}
            label={filterText}
          />
        )}
      </div>
      {error ? (
        <div className="errorTextDiv">Erro ao buscar {boxTitle}.</div>
      ) : loading ? (
        <div className="successTextDiv">Carregando...</div>
      ) : (
        <CardList boxTitle={boxTitle} cardList={cardList} />
      )}
    </LayoutBoxWrapper>
  );
};
