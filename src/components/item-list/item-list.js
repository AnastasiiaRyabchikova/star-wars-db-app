import './item-list.css';

import React from 'react';
import SwapiService from '../../services/swapi-service'; 
import LoadIndicator from '../load-indicator';
import ErrorIndicator from '../load-indicator';

export default class ItemList extends React.Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null
    }
    componentDidMount() {
        this.swapiService
            .gelAllPeople()
            .then((list) => this.setState({peopleList: list, error: false}))
            .catch(this.onError)
    }
    onError() {
        this.setState({error: false});
    }
    render() {
        const {peopleList, error} = this.state;
        const {onItemSelected} = this.props;
        if(!peopleList) {
            return <LoadIndicator />;
        }
        if(error) {
            return <ErrorIndicator />;
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