import React, { useState } from 'react';
import { searchArtworks } from './api';
import Artwork from './artwork';

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('relevance');
    
    const [artworks, setArtworks] = useState([]);

    const handleSearch = async () => {
        const results = await searchArtworks(query, sort);
        setArtworks(results);
    };

    return (
        <div className="search-container">
            <div className="search-form">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for artworks..."
                    className="search-input"
                />
                <select 
                    value={sort} 
                    onChange={(e) => setSort(e.target.value)} 
                    className="sort-select"
                >
                    <option value="relevance">Relevance</option>
                    <option value="artist">Artist (A-Z)</option>
                    <option value="artistdesc">Artist (Z-A)</option>
                    <option value="chronologic">Chronological (Oldest first)</option>
                    <option value="achronologic">Chronological (Newest first)</option>
                    {/* Add other sorting options as needed */}
                </select>
                
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            <div className="gallery">
                {artworks.map((artwork) => (
                    <Artwork key={artwork.id} artwork={artwork} />
                ))}
            </div>
        </div>
    );
};

export default SearchForm;
