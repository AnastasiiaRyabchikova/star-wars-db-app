import './people-page.css';
import ItemList from '../item-list';
import {ItemDetails, Record} from '../item-details';
import React from 'react';

import SwapiService from '../../services/swapi-service'; 
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends React.Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 5
    }
    onPersonSelected = (id) => {
        this.setState({selectedPerson: id});
    }
    render() {
        const {selectedPerson} = this.state;
        const {getPersonById, getStarShipById, getPersonImage, getStarShipImage} = this.swapiService;

        const itemDetails = (
            <ItemDetails
                itemId={selectedPerson}
                getData={getPersonById}
                getImageURL={getPersonImage}
            >
                <Record label="Eye Color" field="eyeColor"/>
                <Record label="Gender" field="gender"/>

            </ItemDetails>
        );

        const itemList = (<ItemList 
            
            getData={this.swapiService.getAllPeople} 
            onItemSelected={this.onPersonSelected}
        >
        {(i) => (
            `${i.name}(${i.birthYear})`
        )}

        </ ItemList>);

        // const itemDetails = <ItemDetails getData={getPersonById} itemId={selectedPerson}/>;
        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        )
    }
    
}