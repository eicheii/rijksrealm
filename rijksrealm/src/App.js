
"use client";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import SearchForm from './components/searchForm';
import LikedArtworks from './components/likedArtwork';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchForm />} />
            <Route path="/liked" element={<LikedArtworks />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;


