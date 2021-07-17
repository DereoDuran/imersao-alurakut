import { LayoutGrid } from "../src/layout/";
import { CardDiv } from "../src/components/";
import { AlurakutMenu } from "../src/lib/Commons";
import { useCommunity, useLogin } from "../src/hooks/";
import { sharedGetServerSideProps } from "../src/utils/utilFunctions";

export default function Comunidades({ githubUser, token }) {
  const { logOut } = useLogin();
  const { communities, communityLoadingError, isLoadingCommunities } =
    useCommunity();

  return (
    <>
      <AlurakutMenu githubUser={githubUser} logOut={logOut} />
      <LayoutGrid>
        <CardDiv
          boxTitle="Comunidades"
          cardList={communities}
          error={communityLoadingError}
          loading={isLoadingCommunities}
        />
      </LayoutGrid>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return sharedGetServerSideProps(ctx);
}
