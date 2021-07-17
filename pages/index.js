import { useState, useEffect } from "react";
import { Container, MainGrid } from "../src/layout/";
import {
  CardBox,
  NewCommunityBox,
  ProfileSidebar,
  WelcomeBox,
} from "../src/components/";
import { AlurakutMenu } from "../src/lib/Commons";
import { useCommunity, useFollowers, useLogin } from "../src/hooks/";
import { decodeToken } from "../src/utils/utilFunctions";
import nookies from "nookies";

export default function Home({ githubUser, token }) {
  const {
    followers,
    following,
    followersError,
    followingError,
    isLoadingFollowers,
    isLoadingFollowing,
  } = useFollowers(token);
  const { logOut } = useLogin();
  const {
    communities,
    addNewCommunity,
    communityLoadingError,
    isLoadingCommunities,
  } = useCommunity();
  // const [allfollowers, setAllFollowers] = 

  return (
    <>
      <AlurakutMenu githubUser={githubUser} logOut={logOut} />
      <MainGrid>
        <Container gridArea="profileArea" className="profileArea">
          <ProfileSidebar githubUser={githubUser} />
        </Container>
        <Container gridArea="welcomeArea">
          <WelcomeBox />
        </Container>
        <Container gridArea="profileRelationsArea">
          <CardBox
            boxTitle="Seguindo"
            cardList={followers}
            error={followersError}
            loading={isLoadingFollowers}
          />
          <CardBox
            boxTitle="Seguidores"
            cardList={following}
            error={followingError}
            loading={isLoadingFollowing}
          />
          <CardBox
            boxTitle="Comunidades"
            cardList={communities}
            error={communityLoadingError}
            loading={isLoadingCommunities}
          />
        </Container>
      </MainGrid>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const token = cookies.USER_TOKEN;
  const { githubUser } = await decodeToken(token);

  if (!githubUser) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      githubUser,
      token,
    },
  };
}
