import './random-planet.css';

import React from 'react';

import LoadIndicator from '../load-indicator'; 
import ErrorBoundry from '../error-boundry';
import { withSwapiServices } from '../hoc-helpers';
class RandomPlanet extends React.Component {
    state = {
        planet: {},
        loading: true
    }

    static defaultProps = {
        updateInterval: 10000
    }

    static propTypes = {
        updateInterval: (props, propName, componentName) => {
            const value = props[propName];

            if (typeof value === 'number' && !isNaN(value)) return null;
            return new TypeError(`${componentName}: ${propName} must be a number, but it is ${value}`);
        }
    }
    
    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false, error: false});
    }
    onPlanetDisLoaded = () => {
        this.setState({error: true, loading: false});
    }
    updatePlanet = () => {
        const { getData } = this.props;
        const id = Math.floor(Math.random() * 25) + 3;

        getData(id)
            .then(this.onPlanetLoaded)
            .catch(this.onPlanetDisLoaded);
    }
    render() {
        const { loading, planet } = this.state;
        const output = !loading ? <PlanetView planet ={planet}/>  :
                        <LoadIndicator/>;

        return (
            <ErrorBoundry>
                <div className='jumbotron random-planet'>
                    {output}
                </div>
            </ErrorBoundry>
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

export default withSwapiServices({getData: 'getPlanetById'})(RandomPlanet);

