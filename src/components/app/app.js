import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
// import PeoplePage from '../people-page';
import {ItemDetails, Record} from '../item-details';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from '../../services/swapi-service'


export default class App extends React.Component {
    swapiService = new SwapiService()
    render() {
        const {getPersonById, getStarShipById, getPersonImage, getStarShipImage} = this.swapiService;
        const personDetails = (
            <ItemDetails
                itemId={7}
                getData={getPersonById}
                getImageURL={getPersonImage}
            >
                <Record label="Eye Color" field="eyeColor"/>
                <Record label="Gender" field="gender"/>

            </ItemDetails>
        );
        const starShipDetails = ( 
            <ItemDetails
                itemId={5}
                getData={getStarShipById}
                getImageURL={getStarShipImage}
            >
                <Record label="Model" field="model"/>
                <Record label="Length" field="length"/>
                <Record label="Cost" field="costInCredits"/>
            </ItemDetails>
            );

        return (
            <ErrorBoundry>
                <div className='app container'>
                    <Header />
                    <RandomPlanet />
                    <ErrorButton />
                    {/* <PeoplePage/> */}
                    <Row left={personDetails} right={starShipDetails}/>
                </div>
            </ErrorBoundry>
        )
    }
}