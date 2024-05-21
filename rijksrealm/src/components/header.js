// header.js
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Rijksrealm</h1>
            <nav className="header-nav">
                <a href="#my-gallery" className="header-link">Saved Artworks</a>
            </nav>
        </header>
    );
};

export default Header;

/* nav suggestion?

{/*  const Header = () => {
    return (
        <header>
            <h1> Rijksrealm</h1>
            <nav>
                <ul>
                    <li><a href ="#Home"</a></li>"
                    <li><a href ="#My Gallery" </a></li>"
            </nav>
            </header> 
        );
    };  

*/