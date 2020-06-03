import './item-list.css';

import React from 'react';
import SwapiService from '../../services/swapi-service'; 
import LoadIndicator from '../load-indicator';

export default class ItemList extends React.Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null
    }
    componentDidMount() {
        this.swapiService
            .gelAllPeople()
            .then((list) => this.setState({peopleList: list}))
    }
    render() {
        const {peopleList} = this.state;
        const {onItemSelected} = this.props;
        if(!peopleList) {
            return <LoadIndicator />;
        }


        return (
            <ul className='list-group'>
                {
                    peopleList.map(({id, name}) => <Item key={id} name={name} id={id} onItemSelected={onItemSelected}/>)
                }
            </ul>
        )
    }
}
const Item = ({id, name, onItemSelected}) => {
    return <li onClick={() => onItemSelected(id)} className='list-group-item list-group__item'>{name}</li>
}