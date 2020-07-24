import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
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
        
        const itemList = (<ItemList 
            getData={this.swapiService.getAllPeople} 
            onItemSelected={this.onPersonSelected}
        >
        {(i) => (
            `${i.name}(${i.birthYear})`
        )}

        </ ItemList>);

        const itemDetails = <ItemDetails itemId={selectedPerson}/>;
        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        )
    }
    
}