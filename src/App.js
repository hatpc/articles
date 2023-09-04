import List from './pages/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Article from './pages/article';
import { LOCATION } from './constants/index';



function App() {
  return (
    <>
      <Routes>
          <Route index element={<List />} />
          <Route path={LOCATION.ARTICLE} element={<Article/>} />
      </Routes>
    </>
  );
}

export default App;
