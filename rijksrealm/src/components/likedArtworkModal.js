import React from 'react';

const LikedArtworkModal = ({ artwork, onClose, removeLikedArtwork }) => {
    return (
        <div className="modal-fullwidth">
            <div className="modal-container">
                <div className="close-button-row">
                    <button type="button" className="close-button cursor-pointer" aria-label="Close" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <div className="modal-img-section">
                        {artwork.webImage && artwork.webImage.url ? (
                        <img src={artwork.webImage.url} alt={artwork.title} />
                        ) : (
                        <div>No image available</div>
                        )}
                    </div>
                    <div className="modal-text">
                        <h2 className="border-bottom" style={{ textTransform: 'uppercase' }}>{artwork.title}</h2>
                        <p className="border-bottom" style={{ fontStyle: 'italic' }}>{artwork.principalOrFirstMaker}</p>
                        <p>{artwork.description}</p>
                        <p><strong>Type:</strong> {artwork.type || 'Details unknown'}</p>
                        <p><strong>Material:</strong> {artwork.material || 'Details unknown'}</p>
                        <p><strong>Technique:</strong> {artwork.technique || 'Details unknown'}</p>
                        <p><strong>Period:</strong> {artwork.period || 'Details unknown'}</p>
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

