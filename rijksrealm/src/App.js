"use client";
import './App.css';
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
        <LikedArtworks />
        <SearchForm />
      </main>
    </div>
  );

  
}

export default App;  

