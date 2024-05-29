import React from 'react';

const Artwork = ({ artwork }) => {
    const saveArtworkButton = () => {
        let savedArtworks = JSON.parse(localStorage.getItem('likedArtworks')) || [];

        // Kontrollerar om artwork ID redan existerar i likedArtworks array
        const artworkExists = savedArtworks.some(item => item.id === artwork.id);

        if (artworkExists) {
            window.alert('This artwork is already saved!');
        } else {

            const artworkToSave = {
                ...artwork,
                description: artwork.description
            };
            savedArtworks.push(artwork);

            localStorage.setItem('likedArtworks', JSON.stringify(savedArtworks));
        }
    };

    return (
        <div>
            {artwork.webImage && artwork.webImage.url ? (
            <img src={artwork.webImage.url} alt={artwork.title} className='gallery-image' />
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


/*<div>
                {artwork.colors && artwork.colors.map((color, index) => (
                    <span key={index} style={{ backgroundColor: color.hex, padding: '5px', margin: '2px' }}></span>
                ))}
                
            
            // </div> */
