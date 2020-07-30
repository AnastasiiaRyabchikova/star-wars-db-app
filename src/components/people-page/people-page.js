import './people-page.css';
import React from 'react';

import SwapiService from '../../services/swapi-service'; 
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';


export default class PeoplePage extends React.Component {
    swapiService = new SwapiService();

    state = {
        selected: 5
    }
    onPersonSelected = (id) => {
        this.setState({selected: id});
    }
    render() {
        const {selected} = this.state;

        return (
            <ErrorBoundry>
                <Row left={<PersonList onItemSelected={this.onPersonSelected} />} right={<PersonDetails itemId={selected}/>}/>
                <Row left={<PlanetList onItemSelected={this.onPersonSelected} />} right={<PlanetDetails itemId={selected}/>}/>
                <Row left={<StarshipList onItemSelected={this.onPersonSelected} />} right={<StarshipDetails itemId={selected}/>}/>
            </ErrorBoundry>
        )
    }
    
}