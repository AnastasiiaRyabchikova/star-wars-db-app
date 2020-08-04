import React from 'react';

import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiServices = (params) => (Wrapped) => (
    (props) => (
        <SwapiServiceConsumer>
            {
                (swapiService) => {
                    return <Wrapped {...props} getData={swapiService[params.getData]} getImageURL={swapiService[params.getImageURL]}/>
                }
            }
        </SwapiServiceConsumer>
    )    
)

export default withSwapiServices;