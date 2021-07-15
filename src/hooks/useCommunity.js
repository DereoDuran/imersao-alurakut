import { useState, useEffect } from "react";

export const useCommunity = () => {
  const [communities, setCommunities] = useState([]);
  const [isLoadingCommunities, setIsLoadingCommunities] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingCommunities(true);
      try {
        const res = await fetch("/api/community/");
        const json = await res.json();

        if (json.communities) {
          setLoadingError(false);
          setCommunities(json.communities);
        } else {
          setLoadingError(true);
        }
      } catch (err) {
        setLoadingError(true);
      } finally {
        setIsLoadingCommunities(false);
      }
    };
    fetchData();
  }, []);

  const addNewCommunity = ({ imageUrl, title }) => {
    setCommunities([
      ...communities,
      {
        id: new Date().toISOString(),
        title: title,
        imageUrl: imageUrl,
      },
    ]);
  };

  return { communities, loadingError, isLoadingCommunities, addNewCommunity };
};
