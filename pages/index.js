import { Container, MainGrid } from "../src/layout/";
import {
  CardBox,
  CommunityBox,
  NewCommunityBox,
  ProfileSidebar,
  WelcomeBox,
} from "../src/components/";
import { AlurakutMenu } from "../src/lib/Commons";
import { GITHUB_USER } from "../src/utils/constants";
import { useCommunity, useFollowers } from "../src/hooks/";

export default function Home() {
  const { addNewCommunity } = useCommunity();
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
          <NewCommunityBox addNewCommunity={addNewCommunity} />
        </Container>
        <Container gridArea="profileRelationsArea">
          <CardBox boxTitle="Meus amigos" cardList={followers} />
          <CommunityBox />
        </Container>
      </MainGrid>
    </>
  );
}
