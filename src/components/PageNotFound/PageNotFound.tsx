import './PageNotFound.scss';

import { useNavigate } from 'react-router-dom';

import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import img from './img/not-found.png';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="title">
      <img className="title__img" src={img} alt="Not Found" />
      <h1 className="title__found">Page not found</h1>
      <Stack spacing={3} direction="row">
        <Button
          size="large"
          id="button"
          variant="outlined"
          onClick={() => navigate('/')}
        >
          Back to homepage
        </Button>
      </Stack>
    </div>
  )
};
