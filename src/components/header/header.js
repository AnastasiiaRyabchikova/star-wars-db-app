import './header.css';

import React from 'react';

export default class Header extends React.Component {
    menuItems = [{id: 'people',label: 'People'}, {id: 'planets', label: 'Planets'}, {id: 'starships', label: 'Starships'}];
    render() {

        const menuLinks = this.menuItems.map(item => {
            return (
            <a className='nav-item' href={item.id} key={item.id}>{item.label}</a>
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
}