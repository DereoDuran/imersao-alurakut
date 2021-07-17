import { Container, HomeGrid } from "../src/layout/";
import { CardBox, ProfileSidebar, WelcomeBox } from "../src/components/";
import { AlurakutMenu } from "../src/lib/Commons";
import { useCommunity, useFollowers, useLogin } from "../src/hooks/";
import { sharedGetServerSideProps } from "../src/utils/utilFunctions";

export default function Home({ githubUser, token }) {
  const { logOut } = useLogin();
  const {
    followers,
    following,
    followersError,
    followingError,
    isLoadingFollowers,
    isLoadingFollowing,
  } = useFollowers(token);
  const { communities, communityLoadingError, isLoadingCommunities } =
    useCommunity();

  return (
    <>
      <AlurakutMenu githubUser={githubUser} logOut={logOut} />
      <HomeGrid>
        <Container gridArea="profileArea" className="profileArea">
          <ProfileSidebar githubUser={githubUser} />
        </Container>
        <Container gridArea="welcomeArea">
          <WelcomeBox />
        </Container>
        <Container gridArea="profileRelationsArea">
          <CardBox
            link="/amigos"
            boxTitle="Seguidores"
            cardList={followers}
            error={followersError}
            loading={isLoadingFollowers}
          />
          <CardBox
            link="/amigos"
            boxTitle="Seguindo"
            cardList={following}
            error={followingError}
            loading={isLoadingFollowing}
          />
          <CardBox
            link="/comunidades"
            boxTitle="Comunidades"
            cardList={communities}
            error={communityLoadingError}
            loading={isLoadingCommunities}
          />
        </Container>
      </HomeGrid>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return sharedGetServerSideProps(ctx);
}
