import { useState } from "react";
import { INITIAL_PEOPLE } from "../utils/constants";

export const usePeople = () => {
  const [people, setPeople] = useState(INITIAL_PEOPLE);

  return { people };
};
