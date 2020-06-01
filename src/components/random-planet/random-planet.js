import './random-planet.css';

import React from 'react';

import SwapiService from '../../services/swapi-service'; 
import LoadIndicator from '../load-indicator'; 
import ErrorIndicator from '../error-indicator'; 
export default class RandomPlanet extends React.Component {
    constructor() {
        super();
        this.updatePlanet()
    }
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false
    }
    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false, error: false});
    }
    onPlanetDisLoaded = () => {
        console.log('onPlanetDisLoaded');
        console.log(this.state);
        this.setState({error: true, loading: false});
        console.log(this.state);

    }
    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService
            .getPlanetById(id)
            .then(this.onPlanetLoaded)
            .catch(this.onPlanetDisLoaded);
    }
    render() {
        const { loading, planet, error } = this.state;
        console.log(error);
        const output =  error ? <ErrorIndicator/> :
                        !loading ? <PlanetView planet ={planet}/>  :
                        <LoadIndicator/>;

        return (
            <div className='jumbotron random-planet'>
                {output}
            </div>
        )
    }
}

const PlanetView = (planet) => {
    const {planet: {id, population, rotationPeriod, name, diameter} } = planet;
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}