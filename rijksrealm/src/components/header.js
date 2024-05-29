import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <img src="stamp.jpg" alt="Logo" className="header-logo" />
                <h1 className="header-title">Rijksrealm</h1>
            </div>
            <nav className="header-nav">
                <a href="/" className="header-link">Start</a>
                <a href="/liked" className="header-link">Liked Artworks</a>
            </nav>
        </header>
    );
};

export default Header;
