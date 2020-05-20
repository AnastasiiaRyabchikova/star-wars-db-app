import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

export default class App extends React.Component {
    render() {
        return (
            <div className='app container'>
                <Header />
                <RandomPlanet />
                <div>
                    <div className='row'>
                        <div className='col-12 col-lg-6 item-list-wrap'> 
                            <ItemList />
                        </div>

                        <div className='col-12 col-lg-6'> 
                            <ItemDetails />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}