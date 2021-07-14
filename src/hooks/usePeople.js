import { useState } from "react";
import { INITIAL_PEOPLE } from "../utils/constants";
import { gitUserToCardInfo } from "../utils/utilFunctions";

export const usePeople = () => {
  const [people, setPeople] = useState(INITIAL_PEOPLE.map(gitUserToCardInfo));

  return { people };
};
