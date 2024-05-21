import React, { useState } from 'react';
import { searchArtworks } from './api';
import Artwork from './artwork';

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
            <div className="gallery">
                {searchResults.length > 0 && (
                    <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Apply styling here */}
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
