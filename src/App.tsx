import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { NewPage } from './components/NewPage/NewPage';
import { ArticleList } from './components/ArticleList/ArticleList';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="articles">
          <Route index element={<NewPage />} />
          <Route path=":articleId" element={<NewPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
