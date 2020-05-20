import './item-details.css';

import React from 'react';

export default class ItemDetails extends React.Component {
    render() {
        return (
            <div className='item-details jumbotron'>
                <div className='item-details__image'>
                    <img src='https://starwars-visualguide.com/assets/img/characters/3.jpg' alt='lorem'/>
                </div>
                <div className='item-details__wrap'>
                    <h2>R2D2</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><span>Gender</span><span></span></li>
                        <li className='list-group-item'><span>Gender</span><span></span></li>
                        <li className='list-group-item'><span>Gender</span><span></span></li>
                    </ul>
                </div>
            </div>
        );
    }
}