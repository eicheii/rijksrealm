"use client";
import './App.css';
import Header from './components/header';
import SearchForm from './components/searchForm';
import Artwork from './components/artwork';
import LikedArtworks from './components/likedArtwork';
import { useState } from 'react';

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [likedArtworks, setLikedArtworks] = useState([]);

  const handleArtworkClick = (artwork) =>  {
    setSelectedArtwork(artwork);
  };

  const handleArtwork = (artwork) => {
    const index = likedArtworks.findIndex((liked) => liked.id === artwork.id);
    if (index === -1){
      setLikedArtworks([...likedArtworks, artwork]);
    } else {
      const updatedLikedArtworks = likedArtworks.filter((liked) => liked.id !== artwork.id);
      setLikedArtworks(updatedLikedArtworks);
    }
  };

  return (
    <div className="App">
      <Header className="App-header"/>
      <main>
        <SearchForm />
      </main>
    </div>
  );
}

export default App;  
