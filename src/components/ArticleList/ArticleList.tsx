import React, { useEffect, useState } from 'react';

import './ArticleList.scss';
import { Container } from "@mui/material";
import { ArticleFindCard } from "../ArticleFindCard/ArcticleFindCard";
import { Article } from '../../data/data';
import { getArticles } from '../../api/api';
import { ArticleCard } from "../ArticleCard/ArticleCard";

export const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | []>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const articlesFilter = articles.filter(({ title, summary }) => (
    title.toLowerCase().includes(inputValue.toLowerCase().trim())
    || summary.toLowerCase().includes(inputValue.toLowerCase().trim())
  ));

  useEffect(() => {
    getArticles()
      .then(response => {
        setArticles(response)
      })
  }, []);

  return (
    <div className="article__list-box">
      <Container maxWidth={false} sx={{ maxWidth: "1290px" }} id="ListContainer">
        <ArticleFindCard
          setSearch={setInputValue}
        />
        <p className="article__list-header">
          Results: {articlesFilter.length}
        </p>
        <ul className="article__list">
          {articlesFilter.map(item => {
            const summaryCorrect = `${item.summary.slice(0, 150)}...`;
            const titleCorrect = item.title.length > 55
              ? `${item.title.slice(0, 50)}...`
              : item.title;

            return (
              <li key={item.id}>
                <ArticleCard
                  id={item.id}
                  title={titleCorrect}
                  filter={inputValue}
                  summary={summaryCorrect}
                  imageUrl={item.imageUrl}
                  publishedAt={item.publishedAt}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  )
}
