import React from 'react';

import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiServices = (Wrapped, params) => (
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