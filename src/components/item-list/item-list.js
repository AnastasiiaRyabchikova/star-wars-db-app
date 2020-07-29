import './item-list.css';

import React from 'react';
import SwapiService from '../../services/swapi-service'; 
import {withData} from '../hoc-helpers/index'


const {getAllPeople} = new SwapiService();
const ItemList = (props) => {
    
    const {onItemSelected, data} = props;
    const renderItem = props.children;
    const items = data.map(({id, name, gender, birthYear}) => {
        const label = renderItem({name, gender, birthYear});
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


export default withData(ItemList, getAllPeople);
