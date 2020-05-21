import './random-planet.css';

import React from 'react';

import SwapiService from '../../services/swapi-service'; 
export default class RandomPlanet extends React.Component {
    constructor() {
        super();
        this.updatePlanet()
    }
    swapiService = new SwapiService();
    state = {
        id: 9,
        population: null,
        rotationPeriod: null,
        diameter: null,
        name: null
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService.getPlanetById(id)
            .then(planet => {
                this.setState(planet);
            });
    }
    render() {

        const {id, population, rotationPeriod, name, diameter} = this.state;

        return (
            <div className='jumbotron random-planet'>
                <div className='random-planet__image'>
                    <img alt='Random Planet' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                </div>
                <div className='random-planet__wrapper'>
                    <h2 className='random-planet__title'>{name}</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><span>Population</span><span> {population}</span></li>
                        <li className='list-group-item'><span>Rotation Period</span><span> {rotationPeriod}</span></li>
                        <li className='list-group-item'><span>Diameter</span><span> {diameter}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}