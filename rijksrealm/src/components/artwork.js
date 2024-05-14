import React from 'react';

const Artwork = ({ artwork }) => {


    return (
        <div classmame="artwork-container">
            <h2>{artwork.title}</h2>
            <p>Artist: {artwork.principalOrFirstMaker}</p>
            {artwork.webImage && artwork.webImage.url ? (
            <img src={artwork.webImage.url} alt={artwork.title} style={{ maxWidth: '600px'}} />
        ) : (
            <div>No image available</div>
        )}
            <button>Save</button>
            {/* Add more details as needed */}
        </div>
    );
};

export default Artwork;