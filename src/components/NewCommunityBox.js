import React, { useState } from "react";
import { Box } from "../layout";

export const NewCommunityBox = ({ handleNewCommunity }) => {
  const [addCommunityFeedback, setAddCommunityFeedBack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target);
    const title = dadosDoForm.get("title");
    const image = dadosDoForm.get("image") || "https://picsum.photos/300/300";
    if (!title) {
      setAddCommunityFeedBack("Preencha o nome da comunidade!");
    } else {
      handleNewCommunity({ image, title });
      setAddCommunityFeedBack("");
      e.target.reset();
    }
  };

  return (
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>
      <form onSubmit={handleSubmit}>
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
        <br />
        {addCommunityFeedback && (
          <div className="errorTextDiv">{addCommunityFeedback}</div>
        )}
      </form>
    </Box>
  );
};
