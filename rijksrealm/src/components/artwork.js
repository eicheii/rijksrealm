import React from "react";

const Artwork = ({ artwork }) => {
    return (
       <div className="artwork">
            <img src={artwork.webImage} alt={artwork.title} />
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
       </div>
    );
};

export default Artwork;