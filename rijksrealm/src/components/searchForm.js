import React, { useState } from 'react';
import { searchArtworks } from './api';
import Artwork from './artwork';

/*
function SearchFunction() {
    const [searchField, setSearchField] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const results = await searchArtworks(searchField);
            setSearchResults(results);  
        } catch (error) {
            console.error('Error searching for artworks', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search here"
                    value={searchField}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {searchResults.length > 0 && (
                    <ul className="gallery" style={{ listStyleType: 'none', padding: 0 }}> 
                        {searchResults.map((art) => (
                            <li key={art.objectNumber} className="gallery-item">
                                <Artwork artwork={art} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default SearchFunction; 
*/

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('relevance');
    const [artworks, setArtworks] = useState([]);

    const handleSearch = async () => {
        const results = await searchArtworks(query, sort);
        setArtworks(results);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for artworks..."
            />
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="relevance">Relevance</option>
                <option value="artist">Artist (A-Z)</option>
                <option value="artistdesc">Artist (Z-A)</option>
                <option value="chronologic">Chronological (Oldest first)</option>
                <option value="achronologic">Chronological (Newest first)</option>
                {/* Add other sorting options as needed */}
            </select>
            <button onClick={handleSearch}>Search</button>
            <div className="gallery">
                {artworks.map((artwork) => (
                    <Artwork key={artwork.id} artwork={artwork} />
                ))}
            </div>
        </div>
    );
};

export default SearchForm;
