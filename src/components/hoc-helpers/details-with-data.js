import React from 'react';
import LoadIndicator from '../load-indicator';
import ErrorIndicator from '../load-indicator';

const detailsWithData = (View) => {

    return class extends React.Component {
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
            if ( prevProps.itemId !== this.props.itemId ) {
                this.updateItem();
                this.setState({loading: true});
            }
        }
        
        updateItem() {
            const { itemId, getData, getImageURL } = this.props;
            if ( !itemId ) return;
            
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
           
            const { item, loading, error, image } = this.state;

            if ( !item ) return <p>Выберите интересующий пункт</p>


            if ( error ) {
                return (
                    <div className='item-details jumbotron'>
                        <ErrorIndicator/>;
                    </div>
                )
            }
    
            if ( loading ) {
                return (
                    <div className='item-details jumbotron'>
                        <LoadIndicator/>
                    </div>
                )
            }



    
            return <View {...this.props} item={item} image={image}/>
        }
    
    }
}


export default detailsWithData;
