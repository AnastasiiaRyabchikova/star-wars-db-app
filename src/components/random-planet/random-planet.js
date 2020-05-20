import './random-planet.css';

import React from 'react';

export default class RandomPlanet extends React.Component {
    render() {
        return (
            <div className='jumbotron random-planet'>
                <div className='random-planet__image'>
                    <img alt='Random Planet' src='https://starwars-visualguide.com/assets/img/planets/5.jpg'/>
                </div>
                <div className='random-planet__wrapper'>
                    <h2 className='random-planet__title'>Planet Name</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><span>Population</span><span>123124</span></li>
                        <li className='list-group-item'><span>Rotation Period</span><span>123124</span></li>
                        <li className='list-group-item'><span>Diameter</span><span>123124</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}