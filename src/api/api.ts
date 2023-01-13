import { Article } from "../data/data";

const BASE_URL: string = "https://api.spaceflightnewsapi.net/v3/"

export const getArticles = (): Promise<Article[]> => {
  return fetch(`${BASE_URL}articles/`)
    .then(response => response.json());
};

export const getArticle = (id: string): Promise<Article> => {
  return fetch(`${BASE_URL}articles/${id}`)
    .then(response => response.json());
};
