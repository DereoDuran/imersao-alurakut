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
    "karymereis1",
    "diaslaris",
    "luryrodrigues",
    "mity-hoshino",
    "flascardoso",
    "copeliacoral",
    "juliana-romero",
    "igor-araujo",
    "guferreircreditas",
  ];
  const companies = ["creditas", "google", "facebook", "openai", "spotify", "deepmind"];
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
              {people.slice(0,6).map((person) => {
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
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({companies.length})</h2>
            <ul>
              {companies.slice(0,6).map((company) => {
                return (
                  <li>
                  <a href={`https://github.com/${company}`} key={company}>
                    <img src={`https://github.com/${company}.png`} />
                    <span>{company}</span>
                  </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </Container>
      </MainGrid>
    </>
  );
}