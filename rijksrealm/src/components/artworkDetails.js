import React from 'react';

const ArtworkDetails = ({ artwork }) => {
  return (
    <div>
      <h2>{artwork.title}</h2>
      <p>Artist: {artwork.artist}</p>
      <p>Date: {artwork.date}</p>
      <p>Description: {artwork.description}</p>
      <img src={artwork.webImage.url} alt={artwork.title} />
      {/* Add more details as needed */}
    </div>
  );
};

export default ArtworkDetails;





  

 
