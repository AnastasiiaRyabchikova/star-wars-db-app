import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context'
// import Row from '../row';
import SwapiService from '../../services/swapi-service'


export default class App extends React.Component {
    swapiService = new SwapiService()
    render() {
        
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className='app container'>
                        <Header />
                        <RandomPlanet/>
                        <ErrorButton />
                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}