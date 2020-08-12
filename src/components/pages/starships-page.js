import React from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
    StarshipDetails,
    StarshipList
} from '../sw-components';


const StarshipPage = ({itemId}) => (
    <ErrorBoundry>
        <Row left={<StarshipList/>} right={<StarshipDetails itemId={itemId}/>}/>
    </ErrorBoundry>
);

export default StarshipPage;