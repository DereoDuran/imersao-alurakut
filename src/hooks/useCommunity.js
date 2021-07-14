import { useState } from "react";
import { INITIAL_COMMUNITIES } from "../utils/constants";

export const useCommunity = () => {
  const [communities, setCommunities] = useState(INITIAL_COMMUNITIES);

  const handleNewCommunity = ({ image, title }) => {
    setCommunities([
      ...communities,
      {
        id: new Date().toISOString(),
        title: title,
        image: image,
      },
    ]);
  };

  return { communities, handleNewCommunity };
};
