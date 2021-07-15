import { CardBox } from ".";
import { useCommunity } from "../hooks/";

export const CommunityBox = () => {
  const { communities, loadingError, isLoadingCommunities } =
    useCommunity();

  return (
    <CardBox
      error={loadingError}
      loading={isLoadingCommunities}
      boxTitle="Comunidades"
      cardList={communities}
    />
  );
};
