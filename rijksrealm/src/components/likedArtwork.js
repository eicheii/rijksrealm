import React, { useState } from 'react';

const LikedArtworks = () => {
    // hämtar sparade konstverk från localStorage
    const [likedArtworks, setLikedArtworks] = useState(() => {
        let savedArtworks = JSON.parse(localStorage.getItem('likedArtworks'));
        return savedArtworks|| [];
    });

    const updateLocalStorage = (artworks) => {
        localStorage.setItem('likedArtworks', JSON.stringify(artworks));
    };

    const handleRemove = (artwork) => {
        const updatedLikedArtworksArray = likedArtworks.filter(item => item.id !== artwork.id);
        
        setLikedArtworks(updatedLikedArtworksArray);
        updateLocalStorage(updatedLikedArtworksArray);
    };

    return (
        <div>
            <h2>Liked Artworks:</h2>
            <ul>
                {likedArtworks.map((artwork) => (
                    <li key={artwork.id}>
                        {artwork.title} <button onClick={() => handleRemove(artwork)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LikedArtworks;
