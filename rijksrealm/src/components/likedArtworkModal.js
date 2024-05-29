import React from 'react';

const LikedArtworkModal = ({ artwork, onClose, removeLikedArtwork }) => {
    return (
        <div className="modal-fullwidth">
            <div className="modal-container">
                <div className="close-button-row">
                    <button type="button" className="close-button cursor-pointer" aria-label="Close" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    {artwork.webImage && artwork.webImage.url ? (
                        <img src={artwork.webImage.url} alt={artwork.title} />
                    ) : (
                        <div>No image available</div>
                    )}
                    <div className="modal-text">
                        <h3 className="border-bottom">{artwork.title}</h3>
                        <p className="border-bottom" style={{ fontStyle: 'italic' }}>{artwork.principalOrFirstMaker}</p>
                        <p>{artwork.description}</p>
                        
                    </div>
                  
                    
                </div>
                <div className="remove-button-row">
                    <button type="button" className="cursor-pointer" onClick={removeLikedArtwork}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default LikedArtworkModal;

