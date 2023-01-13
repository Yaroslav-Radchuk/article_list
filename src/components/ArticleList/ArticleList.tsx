import React, { useEffect, useState } from 'react';

import './ArticleList.scss';
import { Container } from '@mui/material';
import { ArticleFindCard } from '../ArticleFindCard/ArcticleFindCard';
import { Article } from '../../data/data';
import { getArticles } from '../../api/api';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { RingLoader } from 'react-spinners';
import { height } from '@mui/system';

export const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | []>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const articlesFilter = articles.filter(({ title, summary }) => (
    title.toLowerCase().includes(inputValue.toLowerCase().trim())
    || summary.toLowerCase().includes(inputValue.toLowerCase().trim())
  ));

  useEffect(() => {
    const promiseTimeout = new Promise((resolve) => {
      setTimeout(resolve, 1000, setLoading(true));
    });

    Promise.all([getArticles(), promiseTimeout]).then(response => {
      setArticles(response[0]);
      setLoading(false);
    })
  }, []);

  return (
    <div className="article__list-box">
      {loading ? (
        <RingLoader
          loading={loading}
          cssOverride={{
            position: "absolute",
            top: "38%",
            left: "44%",
          }}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Container
        maxWidth={false}
        sx={{ maxWidth: "1290px", height: '100vh' }}
        id="ListContainer">
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
      )}
    </div>
  )
}
