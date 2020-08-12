import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
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
                    <Router>
                        <div className='app container'>
                            
                            <Header />
                            <RandomPlanet/>

                            <Route path="/" exact={true} render={ () => <h2>Welcome to Star DB</h2> }/>

                            <Route path="/people" render={ () => <PeoplePage itemId={null} /> } exact />
                            <Route path="/people/:id" render={  ({match}) => <PeoplePage itemId={match.params.id}/> } />


                            <Route path="/planets" render={ () => <PlanetsPage itemId={null} /> } exact />
                            <Route path="/planets/:id" render={ ({match}) => <PlanetsPage itemId={match.params.id}/> } />
                            
                            <Route path="/starships" render={ () => <StarshipsPage itemId={null}/> } exact />
                            <Route path="/starships/:id" render={ ({match}) => <StarshipsPage itemId={match.params.id} /> } />
                        
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}