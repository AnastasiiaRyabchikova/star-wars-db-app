import React from 'react';
import './error-indicator.css';
export default () => (
    <div className="error-indicator">
        <span className="error-indicator__boom">Boom</span>
        <span>Something has gone terrible wrong</span>
        <span>(but we already sent droids to fix it)</span>
    </div>
)