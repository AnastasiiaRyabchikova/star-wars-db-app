import React from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
    StarshipDetails,
    StarshipList
} from '../sw-components';


export default class StarshipPage extends React.Component {

    state = {
        selected: null
    }
    onPersonSelected = (id) => {
        this.setState({selected: id});
    }
    render() {
        const {selected} = this.state;
        return (
            <ErrorBoundry>
                <Row left={<StarshipList onItemSelected={this.onPersonSelected} />} right={<StarshipDetails itemId={selected}/>}/>
            </ErrorBoundry>
        )
    }
    
}