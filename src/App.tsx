import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import { CardInfo } from './components/CardInfo/CardInfo';
import { ArticleList } from './components/ArticleList/ArticleList';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="articles">
          <Route index element={<CardInfo />} />
          <Route path=":articleId" element={<CardInfo />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
