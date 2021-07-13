import React from "react";
import { Box } from "../layout";

export const NewCommunityBox = ({ addCommunityFeedback, handleNewCommunity }) => {
  return (
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>
      <form onSubmit={handleNewCommunity}>
        <div>
          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Coloque uma URL para usarmos de capa"
            name="image"
            aria-label="Coloque uma URL para usarmos de capa"
          />
        </div>

        <button>Criar comunidade</button>
        <br/>
        {addCommunityFeedback && <div className="errorTextDiv">{addCommunityFeedback}</div>}
      </form>
    </Box>
  );
};
