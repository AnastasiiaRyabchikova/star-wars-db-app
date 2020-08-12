import React from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
    PersonDetails,
    PersonList
} from '../sw-components';


const PeoplePage = ({ itemId }) => (

    <ErrorBoundry>
        <Row left={ <PersonList /> } right={<PersonDetails itemId={ itemId } />}/>
    </ErrorBoundry>

)

export default PeoplePage;