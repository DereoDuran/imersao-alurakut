import { gitUserToCardInfo } from "./utilFunctions";

export const INITIAL_COMMUNITIES = [
  {
    title: "Eu odeio acordar cedo",
    image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    key: "community-Eu odeio acordar cedo",
  },
];

export const INITIAL_PEOPLE = [
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

export const GITHUB_USER = "dereoduran";

export const CLIENT_ID = "b5b5d5f9a569816dc143";
// export const CLIENT_ID = "0e39d2cd550feb299f60";

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
