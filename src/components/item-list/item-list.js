import './item-list.css';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemList = (props) => {
    
    const {data} = props;
    const renderItem = props.children;
    const items = data.map((item) => {
        const label = renderItem(item);
        const { id, category } = item
        return (<li
            className='list-group-item list-group__item'
            key={id}
            id={id}
        >
            <Link to={`/${category}/${id}`}>
                {label}
            </Link>
        </li>)
    })
    
    return (
        <ul className='list-group'>
            {items}
        </ul>
    )
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object)
}


export default ItemList;