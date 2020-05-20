import './item-list.css';

import React from 'react';

export default class ItemList extends React.Component {
    render() {
        return (
            <ul className='list-group'>
                <li className='list-group-item'>LIST</li>
                <li className='list-group-item'>LIST</li>
                <li className='list-group-item'>LIST</li>
            </ul>
        )
    }
}