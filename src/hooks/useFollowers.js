import { useState, useEffect } from "react";
import { GITHUB_USER } from "../utils/constants";
import { formatGitUserJson } from "../utils/utilFunctions";

export const useFollowers = () => {
  const [followers, setFollowers] = useState([]);

  const addFollowers = (newFollowers) =>
    setFollowers([...followers, ...newFollowers]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/followers`)
      .then((response) => response.json())
      .then((responseJson) => {
        addFollowers(responseJson.map(formatGitUserJson));
      })
      .catch((e) => {
        console.log("error fetching followers");
      });
  }, []);

  return { followers };
};
