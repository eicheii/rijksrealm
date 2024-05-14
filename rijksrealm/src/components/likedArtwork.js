import React from 'react';

const LikedArtworks = ({ likedArtworks, onRemove }) => {
    return (
        <div>
            <h2>Liked Artworks:</h2>
            <ul>
                {likedArtworks.map((artwork) => (
                    <li key={artwork.id}>
                        {artwork.title} <button onClick={() => onRemove(artwork)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LikedArtworks;