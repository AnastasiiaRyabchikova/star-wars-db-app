import './item-list.css';

import React from 'react';

const ItemList = (props) => {
    
    const {onItemSelected, data} = props;
    const renderItem = props.children;
    const items = data.map((item) => {
        const label = renderItem(item);
        const { id } = item
        return (<li
            className='list-group-item list-group__item'
            onClick={() => onItemSelected(id)}
            key={id}
            id={id}
        >
            {label}
        </li>)
    })
    
    return (
        <ul className='list-group'>
            {items}
        </ul>
    )
}

export default ItemList;