import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from '../pages';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context'
import SwapiService from '../../services/swapi-service'


export default class App extends React.Component {
    swapiService = new SwapiService()
    state = {
        isLoggedIn: true
    }

    onLogin = () => {
        console.log(this.state.isLoggedIn);
        this.setState((state) => ({isLoggedIn: !state.isLoggedIn}));
    }
    render() {

        const { isLoggedIn } = this.state;

        
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className='app container'>
                            
                            <Header />
                            <RandomPlanet/>

                            <Switch>

                                <Route path="/" exact={true} render={ () => <h2>Welcome to Star DB</h2> }/>
                                <Route path="/people/:id?" render={  ({match}) => <PeoplePage itemId={match.params.id}/> } />
                                <Route path="/planets/:id?" render={ ({match}) => <PlanetsPage itemId={match.params.id}/> } />
                                <Route path="/starships/:id?" render={ ({match}) => <StarshipsPage itemId={match.params.id} /> } />
                                <Route path="/login" render={ () => <LoginPage isLoggedIn={isLoggedIn} onLogin={ this.onLogin }/> } />
                                <Route path="/secret" render={ () => <SecretPage isLoggedIn={isLoggedIn} /> } />
                                
                                <Route render={ () => <div><h1 style={{textAlign: 'center'}}>404</h1><p style={{textAlign: 'center'}}>Page not found</p></div> } />
                            
                            </Switch>
                        
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}