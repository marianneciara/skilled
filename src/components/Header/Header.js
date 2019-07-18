import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <a href="/skilled" className="header__logo">
                <img src={logo} alt="Skilled Logo" />
            </a>
            <div className="header__text">
                <h1>Let's build your dream career</h1>
                <h2 className="h4">Search for any job title to discover which skills are most valued and how we can help get you there</h2>
            </div>
            <SearchBar />
        </div>
    );
};

export default Header;