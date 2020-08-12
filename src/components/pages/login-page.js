import React from 'react';

const LoginPage = ({isLoggedIn, onLogin}) => {
    return (
        <div className="jumbotron">
            <h1>Log in Page</h1>
            <button
                className="btn btn-primary"
                onClick={onLogin}
            > {isLoggedIn ? "Log out" : "Log in"} </button>
        </div>
    )
}

export default LoginPage;