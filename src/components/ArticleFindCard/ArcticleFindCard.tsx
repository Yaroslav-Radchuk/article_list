import React from 'react';
import { TextField, Container } from '@mui/material';

import './ArticleFindCard.scss';

type Props = {
  setSearch: (event: string) => void;
}

export const ArticleFindCard: React.FC<Props> = ({ setSearch }) => {
  const inputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <Container maxWidth="sm" id="TextFieldContainer">
        <p className="text-field__title">
          Filter by keywords
        </p>
        <TextField
          className="text-field"
          id="TextField"
          variant="outlined"
          onChange={inputChanges}
          placeholder="Write a title or description"
          fullWidth
        />
      </Container>
    </>
  )
}
