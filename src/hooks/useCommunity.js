import { useState, useEffect } from "react";

export const useCommunity = () => {
  const [communities, setCommunities] = useState([]);
  const [isLoadingCommunities, setIsLoadingCommunities] = useState(false);
  const [communityLoadingError, setCommunityLoadingError] = useState(false);
  const [addingError, setAddingError] = useState(false);

  const refreshCommunities = async () => {
    setIsLoadingCommunities(true);
    try {
      const res = await fetch("/api/community/");
      const json = await res.json();

      if (json.communities) {
        setCommunityLoadingError(false);
        setCommunities(json.communities);
      } else {
        setCommunityLoadingError(true);
      }
    } catch (err) {
      setCommunityLoadingError(true);
    } finally {
      setIsLoadingCommunities(false);
    }
  };

  const postCommunity = async ({ image, title }) => {
    setAddingError(false);
    try {
      const res = await fetch("/api/community/", {
        method: "POST",
        body: JSON.stringify({
          creatorSlug: "webapp",
          imageUrl: image,
          title: title,
        }),
      });
      refreshCommunities();
    } catch (err) {
      setAddingError(true);
    }
  };

  const addNewCommunity = ({ image, title }) => {
    postCommunity({ image, title });
  };

  useEffect(() => {
    refreshCommunities();
  }, []);

  return {
    communities,
    communityLoadingError,
    addingError,
    isLoadingCommunities,
    addNewCommunity,
  };
};
