import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

export default class App extends React.Component {
    state = {
        hasError: false
    }
    componentDidCatch() {
        this.setState({hasError: true});
    }
    render() {
        const {hasError} = this.state;
        if(hasError) {
            return <ErrorIndicator/>; 
        }
        return (
            <div className='app container'>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
        )
    }
}