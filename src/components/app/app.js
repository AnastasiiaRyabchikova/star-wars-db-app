import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

export default class App extends React.Component {
    state = {
        selectedPerson: 5
    }
    onPersonSelected = (id) => {
        console.log(id);
        this.setState({selectedPerson: id});
    }
    render() {
        const {selectedPerson} = this.state;

        return (
            <div className='app container'>
                <Header />
                <RandomPlanet />
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
            </div>
        )
    }
}