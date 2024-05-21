import React from 'react';

const Artwork = ({ artwork }) => {
    const saveArtworkButton = () => {
        let savedArtworks = JSON.parse(localStorage.getItem('likedArtworks')) || [];

        savedArtworks.push(artwork);
        
        localStorage.setItem('likedArtworks', JSON.stringify(savedArtworks));
    };

    return (
        <div classmame="artwork-container">
            <h2>{artwork.title}</h2>
            <p>Artist: {artwork.principalOrFirstMaker}</p>
            {artwork.webImage && artwork.webImage.url ? (
            <img src={artwork.webImage.url} alt={artwork.title} className="gallery-image" />
        ) : (
            <div>No image available</div>
        )}
            <button onClick={saveArtworkButton}>Save</button>
            {/* Add more details as needed */}
        </div>
    );
};

export default Artwork;