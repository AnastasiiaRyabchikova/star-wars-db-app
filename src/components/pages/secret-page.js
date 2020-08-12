import React from 'react';

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
        <div className="jumbotron">
            <h1>Very secret page</h1>
            <p>GO AWAY</p>
        </div>
    )
}

export default SecretPage;