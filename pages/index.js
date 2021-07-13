import { Container, Box } from "../src/layout/";
import { MainGrid, ProfileRelationsBoxWrapper } from "../src/components/";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/Commons";

const ProfileSidebar = ({ githubUser }) => {
  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} />
    </Box>
  );
};

export default function Home() {
  const githubUser = "dereoduran";
  const people = [
    "diasvillar",
    "brunofernandes35",
    "wboccato",
    "arturyuiti",
    "mity-hoshino",
    "karymereis1",
    "gkdekker",
    "diaslaris",
    "luryrodrigues",
    "flascardoso",
    "copeliacoral",
    "juliana-romero",
    "igor-araujo",
    "guferreircreditas",
  ];
  const orgs = ["creditas", "google", "facebook", "openai", "deepmind"];
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <Container gridArea="profileArea">
          <ProfileSidebar {...{ githubUser }} />
        </Container>
        <Container gridArea="welcomeArea">
          <Box>
            <h2>Bem-vindo(a)</h2>
            <OrkutNostalgicIconSet />
          </Box>
        </Container>
        <Container gridArea="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Meus amigos ({people.length})</h2>
            <ul>
              {people.map((person) => {
                return (
                  <li>
                  <a href={`https://github.com/${person}`} key={person}>
                    <img src={`https://github.com/${person}.png`} />
                    <span>{person}</span>
                  </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </Container>
      </MainGrid>
    </>
  );
}