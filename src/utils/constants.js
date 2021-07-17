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
