import './people-page.css';
import React from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
    PlanetDetails,
    PlanetList,
} from '../sw-components';


export default class PlanetPage extends React.Component {

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
                <Row left={<PlanetList onItemSelected={this.onPersonSelected} />} right={<PlanetDetails itemId={selected}/>}/>
            </ErrorBoundry>
        )
    }
    
}