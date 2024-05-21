import React, { useState } from 'react';

const LikedArtworks = () => {
    // hämtar sparade konstverk från localStorage
    const [likedArtworks, setLikedArtworks] = useState(() => {
        let savedArtworks = JSON.parse(localStorage.getItem('likedArtworks'));
        return savedArtworks || [];
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
            <div className="gallery">
            <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Apply styling here */}
                {likedArtworks.map((artwork) => (
                    <li key={artwork.id} className="gallery-item">
                        <img src={artwork.webImage.url} alt={artwork.title} className="gallery-image" style={{ maxWidth: '100px'}} />
                        <p>{artwork.title}</p>
                        <button onClick={() => handleRemove(artwork)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default LikedArtworks;
