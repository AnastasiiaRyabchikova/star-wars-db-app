import React from 'react';
import { Redirect } from 'react-router-dom';


const SecretPage = ({isLoggedIn}) => {
    if ( isLoggedIn ) {
        return (
            <div className="jumbotron">
                <h1>Very secret page</h1>
                <p>Secret facts</p>
            </div>
        )
    }
    return (
        <Redirect to="/login" />
    )
}

export default SecretPage;