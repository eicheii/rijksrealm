/*
"use client";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/header';
import SearchForm from './components/searchForm';
import Artwork from './components/artwork';
import LikedArtworks from './components/likedArtwork';
import { useState } from 'react';




  function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes path="/">
            <Route index element={<SearchForm />} />
            <Route path="liked" element={<LikedArtworks />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );

  
}

export default App;  */

"use client";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import SearchForm from './components/searchForm';
import Artwork from './components/artwork';
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


