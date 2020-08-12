import React from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
    PlanetDetails,
    PlanetsList,
} from '../sw-components';


const PlanetPage = ({itemId}) => (
    <ErrorBoundry>
        <Row left={<PlanetsList />} right={<PlanetDetails itemId={ itemId }/>}/>
    </ErrorBoundry>
);

export default PlanetPage;