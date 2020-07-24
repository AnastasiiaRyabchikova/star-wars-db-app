import './item-details.css';

import React from 'react';
import LoadIndicator from '../load-indicator'; 
import ErrorIndicator from '../error-indicator'; 
import ErrorButton from '../error-button'; 
import SwapiService from '../../services/swapi-service'; 

const Record = ({item, label, field}) => {
    console.log(label);
    return (
        <li className='list-group-item'>{label}<span></span><span> {item[field]}</span></li>
    )
}

export { Record };

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
                console.log(item);
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

        if (error) {
            return (
                <div className='item-details jumbotron'>
                    <ErrorIndicator/>;
                </div>
            )
        }

        if (loading) {
            return (
                <div className='item-details jumbotron'>
                    <LoadIndicator/>
                </div>
            )
        }

        const {gender, birthYear, eyeColor, name} = item;

        return (
            <div className='item-details jumbotron'>
                <div className='item-details__image'>
                    <img src={image} alt={name}/>
                </div>
                <div className='item-details__wrap'>
                    <h2>{name}</h2>
                    <ul className='list-group list-group-flush'>
                        {React.Children.map(this.props.children, (child)=> {
                            return React.cloneElement(child, {item});
                        })}
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        );
    }
}