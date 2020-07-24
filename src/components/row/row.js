import React from 'react';
export default ({ left, right }) => (
    <div>
        <div className='row'>
            <div className='col-12 col-lg-6 item-list-wrap'>
                { left }
            </div>

            <div className='col-12 col-lg-6'> 
                { right }
            </div>
        </div>
    </div>
)
