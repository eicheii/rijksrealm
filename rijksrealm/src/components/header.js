// header.js
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Rijksrealm</h1>
            <nav className="header-nav">
                <a href="/" className="header-link">Start</a>

                <a href="/liked" className="header-link">Saved Artworks</a>
            </nav>
        </header>
    );
};

export default Header;

