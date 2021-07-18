import React, { useState, useEffect } from "react";
import { CardList, LayoutBoxWrapper, TableFilter } from "./";
import { TablePagination } from "@material-ui/core";

export const CardDivFilter = ({
  error,
  loading,
  boxTitle,
  cardList,
  filter,
  setFilter,
  filterText,
  filterString,
  setFilterString,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [selectedResults, setSelectedResults] = useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setSelectedResults(
      cardList.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
  }, [page, rowsPerPage, cardList, filter, filterString]);
  useEffect(() => {
    setPage(0);
  }, [cardList, filter, filterString]);
  return (
    <LayoutBoxWrapper>
      <div className="cardDiv">
        <div>
          <h2 className="smallTitle">
            {boxTitle} ({cardList.length})
          </h2>
        </div>
      </div>
      <div className="filter">
        <TableFilter
          filterString={filterString}
          setFilterString={setFilterString}
          filter={filter}
          setFilter={setFilter}
          filterText={filterText}
        />
          <TablePagination
            style={{ display: 'block' }}
            component="div"
            count={cardList.length}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage="Resultados por página:"
            nextIconButtonText="Próxima página"
            backIconButtonText="Página anterior"
            labelDisplayedRows={(object) =>
              `${object.from}-${object.to} de ${
                object.count !== -1 ? object.count : `mais de ${object.to}`
              }`
            }
          /></div>
      <br />
      <div>
          {error ? (
            <div className="errorTextDiv">Erro ao buscar {boxTitle}.</div>
          ) : loading ? (
            <div className="successTextDiv">Carregando...</div>
          ) : (
            <CardList boxTitle={boxTitle} cardList={selectedResults} />
          )}
      </div>
    </LayoutBoxWrapper>
  );
};
