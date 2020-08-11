import './header.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = [{id: 'people',label: 'People'}, {id: 'planets', label: 'Planets'}, {id: 'starships', label: 'Starships'}];
    const menuLinks = menuItems.map(item => {
        return (
        <Link className='nav-item' to={item.id} key={item.id}>{item.label}</Link>
        )
    });
    return (
        <header className='header'>
            <span className='logo'>Star Wars DB</span>
            <nav>
                {menuLinks}
            </nav>
        </header>
    )
    
}

export default Header;