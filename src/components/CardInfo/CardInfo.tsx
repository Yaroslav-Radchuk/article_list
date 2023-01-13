import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import './CardInfo.scss';

import { Container } from '@mui/system';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import RingLoader from 'react-spinners/RingLoader';

import { getArticle } from '../../api/api';
import { Article } from '../../data/data';

export const CardInfo: React.FC = () => {
  const { articleId = '0' } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promiseTimeout = new Promise((resolve) => {
      setTimeout(resolve, 1000, setLoading(true));
    });

    Promise.all([getArticle(articleId.slice(1)), promiseTimeout]).then(response => {
      setArticle(response[0]);
      setLoading(false)
    })
  }, [articleId]);

  return (
    <>
      {loading ? (
        <RingLoader
          loading={loading}
          cssOverride={{
            height: "100%",
            position: "absolute",
            top: "38%",
            left: "44%",
          }}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Container id="container">
          <CardMedia
            component="img"
            height="245"
            image={article?.imageUrl}
            id="media-page"
            alt={`Article image ${articleId}`}
          />
          <Card id="cards">
            <CardContent id="new-box">
              <div className="cards__new-box">
                <Typography
                  component="div"
                  id="title-page"
                >
                  {article?.title}
                </Typography>
              </div>
              <Typography
                variant="body2"
                id="summary-page"
                color="text.secondary"
              >
                {article?.summary}
              </Typography>
            </CardContent>
          </Card>
          <Typography id="link-page">
              <Link
                to="/"
                rel="noreferrer"
                className="cards__link-page"
              >
                Back to homepage
              </Link>
          </Typography>
        </Container>
      )}
    </>
  )
};
