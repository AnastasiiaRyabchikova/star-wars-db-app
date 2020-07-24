import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
// import PeoplePage from '../people-page';
import ItemDetails from '../item-details';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from '../../services/swapi-service'

export default class App extends React.Component {
    swapiService = new SwapiService()
    render() {
        const {getPersonById, getStarShipById, getPersonImage, getStarShipImage} = this.swapiService;
        const personDetails = <ItemDetails itemId={7} getData={getPersonById} getImageURL={getPersonImage}/>;
        const starShipDetails = <ItemDetails itemId={11} getData={getStarShipById} getImageURL={getStarShipImage}/>;

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