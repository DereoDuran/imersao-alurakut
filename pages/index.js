import React, { useState } from "react";
import { Container, MainGrid } from "../src/layout/";
import {
  CardBox,
  NewCommunityBox,
  ProfileSidebar,
  WelcomeBox,
} from "../src/components/";
import { AlurakutMenu } from "../src/lib/Commons";
import {
  GITHUB_USER,
  INITIAL_COMMUNITIES,
  INITIAL_PEOPLE,
} from "../src/utils/constants";
import { gitUserToCardInfo } from "../src/utils/utilFunctions";

export default function Home() {
  const [communities, setCommunities] = useState(INITIAL_COMMUNITIES);

  const people = INITIAL_PEOPLE.map(gitUserToCardInfo);

  const handleNewCommunity = ({ image, title }) => {
    setCommunities([
      ...communities,
      {
        id: new Date().toISOString(),
        title: title,
        image: image,
      },
    ]);
  };

  return (
    <>
      <AlurakutMenu githubUser={GITHUB_USER} />
      <MainGrid>
        <Container gridArea="profileArea">
          <ProfileSidebar githubUser={GITHUB_USER} />
        </Container>
        <Container gridArea="welcomeArea">
          <WelcomeBox />
          <NewCommunityBox handleNewCommunity={handleNewCommunity} />
        </Container>
        <Container gridArea="profileRelationsArea">
          <CardBox boxTitle="Meus amigos" cardList={people} />
          <CardBox boxTitle="Comunidades" cardList={communities} />
        </Container>
      </MainGrid>
    </>
  );
}
