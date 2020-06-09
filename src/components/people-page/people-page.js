import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import React from 'react';
import ErrorIndicator from '../error-indicator';
export default class PeoplePage extends React.Component {
    state = {
        selectedPerson: 5,
        hasError: false
    }
    componentDidCatch() {
        this.setState({hasError: true});
    }
    onPersonSelected = (id) => {
        this.setState({selectedPerson: id});
    }
    render() {
        const {selectedPerson, hasError} = this.state;
        if(hasError) {
            return <ErrorIndicator />
        }
        return (
        <div>
            <div className='row'>
                <div className='col-12 col-lg-6 item-list-wrap'> 
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>

                <div className='col-12 col-lg-6'> 
                    <ItemDetails personId={selectedPerson}/>
                </div>
            </div>
        </div>
        )
    }
    
}