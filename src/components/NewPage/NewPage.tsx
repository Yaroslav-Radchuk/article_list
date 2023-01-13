import React, { useEffect, useState } from "react";
import './NewPage.scss';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import { getArticle } from "../../api/api";
import { Article } from "../../data/data";
import { Container } from "@mui/system";

export const NewPage: React.FC = () => {
  const { articleId = '0' } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticle(articleId.slice(1))
      .then((res) => setArticle(res))
  }, [articleId]);

  return (
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
  )
};
