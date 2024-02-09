import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Article from './Pages/Article';
import ArticlesList from './Pages/ArticalesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:name" element={<Article />} />
        <Route path="/articles-List" element={<ArticlesList />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
