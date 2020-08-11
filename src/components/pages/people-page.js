import React from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
    PersonDetails,
    PersonList
} from '../sw-components';


export default class PeoplePage extends React.Component {

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
                <Row left={<PersonList onItemSelected={this.onPersonSelected} />} right={<PersonDetails itemId={selected}/>}/>
            </ErrorBoundry>
        )
    }
    
}