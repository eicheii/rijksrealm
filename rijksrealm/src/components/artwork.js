import React, {useState} from 'react';

const Artwork = ({ artwork }) => {
    const saveArtworkButton = () => {
        let savedArtworks = JSON.parse(localStorage.getItem('likedArtworks')) || [];

        // Check if the artwork ID already exists in the saved artworks
        const exists = savedArtworks.some(item => item.id === artwork.id);

        if (exists) {
            // Display an alert if the artwork is already saved
            window.alert('This artwork is already saved.');
        } else {
            // If the artwork is not already saved, add it to the saved artworks array
            savedArtworks.push(artwork);

            // Update localStorage with the updated saved artworks array
            localStorage.setItem('likedArtworks', JSON.stringify(savedArtworks));
        }
    };

    return (
        <div>
            {artwork.webImage && artwork.webImage.url ? (
            <img src={artwork.webImage.url} alt={artwork.title} className="gallery-image" />
            ) : (
                <div>No image available</div>
            )}
            <h3>{artwork.title}</h3>
            <p style={{ fontStyle: 'italic' }}>{artwork.principalOrFirstMaker}</p>
            <button onClick={saveArtworkButton}>Save</button>
            {/* Add more details as needed */}
        </div>
    );
};

export default Artwork;