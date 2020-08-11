import './error-button.css';

import React, {useState} from 'react';

const ErrorButton = () => {

    const [renderError, setRenderError] = useState(false);

    if ( renderError ) this.foo.bar = 0;
    return (
        <button 
            className="btn error-button btn-danger btn-lg"
            onClick={() => setRenderError(true)}    
        >
            Trow Error
        </button>
    )
}
export default ErrorButton;