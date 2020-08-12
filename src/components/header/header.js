import './header.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = [
        {id: 'people',label: 'People'},
        {id: 'planets', label: 'Planets'},
        {id: 'starships', label: 'Starships'},
        {id: 'login', label: 'Login'},
        {id: 'secret', label: 'Secret'} 
    ];
    const menuLinks = menuItems.map(item => {
        return (
        <Link className='nav-item' to={`/${item.id}`} key={item.id}>{item.label}</Link>
        )
    });
    return (
        <header className='header'>
            <Link to="/" className='logo'>Star Wars DB</Link>
            <nav>
                {menuLinks}
            </nav>
        </header>
    )
    
}

export default Header;