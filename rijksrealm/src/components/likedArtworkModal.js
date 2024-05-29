import React from 'react';

const LikedArtworkModal = ({ artwork, onClose, removeLikedArtwork }) => {
    return (
        <div className="modal-fullwidth">
            <div className="modal-container">
                <button type="button" className="btn-close" aria-label="Close" onClick={onClose}>X</button>
                <div className="modal-body">
                    {artwork.webImage && artwork.webImage.url ? (
                        <img src={artwork.webImage.url} alt={artwork.title} />
                    ) : (
                        <div>No image available</div>
                    )}
                    <div className="modal-text">
                        <h3 className="modal-art-title">{artwork.title}</h3>
                        <p>Test</p>
                    </div>
                </div>
                <div className="modal-buttons">
                    <button type="button" className="btn btn-primary" onClick={removeLikedArtwork}>Remove</button>
                    <button type="button" className="btn btn-primary">Comment</button> {/* !! behöver en funktion !!*/}
                </div>
            </div>
        </div>
    );
};

export default LikedArtworkModal;
