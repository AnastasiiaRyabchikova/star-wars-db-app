import './item-details.css';

import React from 'react';
import LoadIndicator from '../load-indicator'; 
import ErrorIndicator from '../error-indicator'; 
import ErrorButton from '../error-button'; 
import SwapiService from '../../services/swapi-service'; 

export default class ItemDetails extends React.Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        loading: true,
        error: false
    }
    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if(prevProps.personId !== this.props.personId) {
            this.updatePerson();
            this.setState({loading: true});
        }
    }
    updatePerson() {
        const {personId} = this.props;
        
        if(!personId) return;
        this.swapiService
            .getPersonById(personId)
            .then((person) => {
                console.log(person);
                this.setState({person, error: false, loading: false});
            })
            .catch(() => this.setState({error: true, loading: false}));
    }
    render() {
        const {person, loading, error} = this.state;
        const output = error ? <ErrorIndicator/> :
                        !loading ? <ItemDetailsView person={person}/>  :
                        <LoadIndicator/>;
        return (
            <div className='item-details jumbotron'>
                {output}
            </div>
        );
    }
}

const ItemDetailsView = (props) => {
    const {id, gender, birthYear, eyeColor, name} = props.person;
    return (
    <React.Fragment>
        <div className='item-details__image'>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name}/>
        </div>
        <div className='item-details__wrap'>
            <h2>{name}</h2>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'><span>Gender</span><span>{gender}</span></li>
                <li className='list-group-item'><span>Birth Year</span><span>{birthYear}</span></li>
                <li className='list-group-item'><span>Eye Color</span><span>{eyeColor}</span></li>
            </ul>
            <ErrorButton />

        </div>
    </React.Fragment>
    )
}