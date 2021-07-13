import React, { useState } from "react";
import { Container, Box } from "../src/layout/";
import {
  CardBox,
  MainGrid,
  NewCommunityBox,
  ProfileSidebar,
} from "../src/components/";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/Commons";

export default function Home() {
  const [communities, setCommunities] = useState([
    {
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
      key: "community-Eu odeio acordar cedo",
    },
  ]);
  const [addCommunityFeedback , setAddCommunityFeedBack] = useState("")
  const githubUser = "dereoduran";
  const gitUserToCardInfo = (user) => {
    return {
      title: user,
      image: `https://github.com/${user}.png`,
      key: `person-${user}`,
      href: `https://github.com/${user}`,
    };
  };
  const people = [
    "diasvillar",
    "brunofernandes35",
    "wboccato",
    "arturyuiti",
    "karymereis1",
    "diaslaris",
    "luryrodrigues",
    "mity-hoshino",
    "flascardoso",
    "copeliacoral",
    "juliana-romero",
    "igor-araujo",
    "guferreircreditas",
  ].map(gitUserToCardInfo);
  const handleNewCommunity = (e) => {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target);
    const title = dadosDoForm.get("title");
    const image = dadosDoForm.get("image") || 'https://picsum.photos/300/300';
    if (!title) {
      setAddCommunityFeedBack("Preencha o nome da comunidade!")
    } else {
      setCommunities([
        ...communities,
        {
          id: new Date().toISOString(),
          title: title,
          image: image,
        },
      ]);
      setAddCommunityFeedBack("");
      e.target.reset()
    }
  };
  return (
    <>
      <AlurakutMenu {...{ githubUser }} />
      <MainGrid>
        <Container gridArea="profileArea">
          <ProfileSidebar {...{ githubUser }} />
        </Container>
        <Container gridArea="welcomeArea">
          <Box>
            <h2>Bem-vindo(a)</h2>
            <OrkutNostalgicIconSet />
          </Box>
          <NewCommunityBox addCommunityFeedback={addCommunityFeedback} handleNewCommunity={handleNewCommunity} />
        </Container>
        <Container gridArea="profileRelationsArea">
          <CardBox boxTitle="Meus amigos" cardList={people} />
          <CardBox boxTitle="Comunidades" cardList={communities} />
        </Container>
      </MainGrid>
    </>
  );
}
