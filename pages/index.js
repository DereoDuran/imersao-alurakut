import { Container, MainGrid } from "../src/layout/";
import {
  CardBox,
  NewCommunityBox,
  ProfileSidebar,
  WelcomeBox,
} from "../src/components/";
import { AlurakutMenu } from "../src/lib/Commons";
import { GITHUB_USER } from "../src/utils/constants";
import { useCommunity, useFollowers } from "../src/hooks/";

export default function Home() {
  const { communities, handleNewCommunity } = useCommunity();
  const { followers } = useFollowers();

  return (
    <>
      <AlurakutMenu githubUser={GITHUB_USER} />
      <MainGrid>
        <Container gridArea="profileArea" className="profileArea">
          <ProfileSidebar githubUser={GITHUB_USER} />
        </Container>
        <Container gridArea="welcomeArea">
          <WelcomeBox />
          <NewCommunityBox handleNewCommunity={handleNewCommunity} />
        </Container>
        <Container gridArea="profileRelationsArea">
          <CardBox boxTitle="Meus amigos" cardList={followers} />
          <CardBox boxTitle="Comunidades" cardList={communities} />
        </Container>
      </MainGrid>
    </>
  );
}
