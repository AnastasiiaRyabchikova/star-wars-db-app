import './item-details.css';

import React from 'react';
import ErrorButton from '../error-button'; 

const ItemDetails =  ({item, image}) => {
    const fields = Object.keys(item);
    const recordFields = fields
        .filter((key) => item[key] && key !== 'id')
        .map(key => {
            let itemSeparated = key.split('').map((letter) =>  (letter === letter.toUpperCase()) ? ' ' + letter : letter).join('');
            let label = itemSeparated[0].toUpperCase() + itemSeparated.slice(1);

            return {
                field: key,
                label,
                item
            }
        });
    
    const records = recordFields.map(( {label, field} ) => <li key={field} className='list-group-item'>{label}:<span></span><span> {item[field]}</span></li>);

    return (<div className='item-details jumbotron'>
        <div className='item-details__image'>
            <img src={image} alt={item.name}/>
        </div>
        <div className='item-details__wrap'>
            <h2>{item.name}</h2>
            <ul className='list-group list-group-flush'>
                { records }
            </ul>
            <ErrorButton />
        </div>
    </div>)
}

export default ItemDetails;