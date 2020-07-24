import './item-details.css';

import React from 'react';
import LoadIndicator from '../load-indicator'; 
import ErrorIndicator from '../error-indicator'; 
import ErrorButton from '../error-button'; 
import SwapiService from '../../services/swapi-service'; 

export default class ItemDetails extends React.Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        loading: true,
        error: false,
        image: null
    }
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if(prevProps.itemId !== this.props.itemId) {
            this.updateItem();
            this.setState({loading: true});
        }
    }
    updateItem() {
        const {itemId, getData, getImageURL} = this.props;
        console.log(itemId);
        if(!itemId) return;
        
        getData(itemId)
            .then((item) => {
                this.setState(
                    {
                        item,
                        image: getImageURL(itemId),
                        error: false,
                        loading: false
                    }
                );
            })
            .catch(() => this.setState({error: true, loading: false}));
    }
    render() {
        const {item, loading, error, image} = this.state;
        const output = error ? <ErrorIndicator/> :
                        !loading ? <ItemDetailsView item={item} image={image}/>  :
                        <LoadIndicator/>;
        return (
            <div className='item-details jumbotron'>
                {output}
            </div>
        );
    }
}

const ItemDetailsView = ({item, image}) => {
    const {gender, birthYear, eyeColor, name} = item;
    console.log(image)
    return (
    <React.Fragment>
        <div className='item-details__image'>
            <img src={image} alt={name}/>
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