import React, { useState } from 'react';
import LikedArtworkModal from './likedArtworkModal';

const LikedArtworks = () => {
    // hämtar sparade konstverk från localStorage
    const [likedArtworks, setLikedArtworks] = useState(() => {
        let savedArtworks = JSON.parse(localStorage.getItem('likedArtworks'));
        return savedArtworks || [];
    });

    const updateLocalStorage = (artworks) => {
        localStorage.setItem('likedArtworks', JSON.stringify(artworks));
    };

    // konstverket som användaren har tryckt på
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    const handleRemove = (artwork) => {
        // användaren måste bekräfta innan konstverket tas bort
        var confirmRemoveArt = window.confirm("Do you want to remove this artwork from your list?");
        if (confirmRemoveArt) {
            const updatedLikedArtworksArray = likedArtworks.filter(item => item.id !== artwork.id);
            setLikedArtworks(updatedLikedArtworksArray);
            updateLocalStorage(updatedLikedArtworksArray);
            setSelectedArtwork(null);
        } else {
            // gör ingenting
        }
    };

    const handleImageClick = (artwork) => {
        setSelectedArtwork(artwork);
        document.body.classList.add("no-scroll");
        console.log(artwork);
    };

    const handleCloseModal = () => {
        setSelectedArtwork(null);
        document.body.classList.remove("no-scroll");
    };

    return (
        <div className="gallery-container">
            <h2>Liked Artworks</h2>
            <div>
                <ul className="gallery" style={{ listStyleType: 'none', padding: 0 }}> {/* Apply styling here */}
                    {likedArtworks.map((artwork) => (
                        <li key={artwork.id} className="gallery-item" >
                            {artwork.webImage && artwork.webImage.url ? (
                                <img 
                                    src={artwork.webImage.url} 
                                    alt={artwork.title} 
                                    className="gallery-image cursor-pointer" 
                                    onClick={() => handleImageClick(artwork)} 
                                />
                            ) : (
                                <div>No image available</div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {selectedArtwork && (
                <LikedArtworkModal 
                    artwork={selectedArtwork} 
                    onClose={handleCloseModal} 
                    removeLikedArtwork={() => handleRemove(selectedArtwork)} 
                />
            )}
        </div>
    );
};

export default LikedArtworks;
