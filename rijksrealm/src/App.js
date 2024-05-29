import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import SearchForm from './components/searchForm';
import LikedArtworks from './components/likedArtwork';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');
    if (!hasShownPopup) {
      setShowPopup(true);
      sessionStorage.setItem('hasShownPopup', 'true');
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Hi from the devs!</h2>
            <p>Welcome to our application. We hope you enjoy your experience!</p>
            <p><i>ps. the starry night is at moma </i></p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
