import { useState, useEffect } from "react";
import { GITHUB_USER } from "../utils/constants";
import { formatGitUserJson, gitUserToCardInfo } from "../utils/utilFunctions";

export const useFollowers = (token) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followersError, setFollowersError] = useState(false);
  const [followingError, setFollowingError] = useState(false);
  const [isLoadingFollowers, setIsLoadingFollowers] = useState(false);
  const [isLoadingFollowing, setIsLoadingFollowing] = useState(false);

  const refreshHook = () => {
    const MAX_SIZE = 100;
    let startingPage = 1;

    const getAll = (page, result, type) => {
      return fetch(
        `https://api.github.com/user/${type}?page=${page}&per_page=${MAX_SIZE}`,
        {
          method: "GET",
          headers: {
            accept: "application/vnd.github.v3+json",
            Authorization: `token ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          const concatResult = result.concat(response);
          if (response.length > 0) {
            return getAll(page + 1, concatResult, type);
          } else if (response.message) {
            return {
              error: true,
              result: [],
            };
          }
          return {
            error: false,
            result: concatResult,
          };
        })
        .catch((err) => {
          return {
            error: true,
            result: [],
          };
        });
    };

    const getFollowers = (page, result) => getAll(page, result, "followers");
    const getFollowing = (page, result) => getAll(page, result, "following");

    setIsLoadingFollowers(true);
    setIsLoadingFollowing(true);

    getFollowers(startingPage, []).then((res) => {
      const { error, result } = res;
      if (error) {
        setFollowers([]);
        setFollowersError(true);
      } else {
        setFollowers(result.map(gitUserToCardInfo));
        setFollowersError(false);
      }
      setIsLoadingFollowers(false);
    });

    getFollowing(startingPage, []).then((res) => {
      const { error, result } = res;
      if (error) {
        setFollowing([]);
        setFollowingError(true);
      } else {
        setFollowing(result.map(gitUserToCardInfo));
        setFollowingError(false);
      }
      setIsLoadingFollowing(false);
    });
  };

  useEffect(() => refreshHook(), [token]);
  return {
    followers,
    following,
    followersError,
    followingError,
    isLoadingFollowers,
    isLoadingFollowing,
  };
};
