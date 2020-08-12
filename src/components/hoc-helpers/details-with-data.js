import React from 'react';
import LoadIndicator from '../load-indicator';
import ErrorIndicator from '../load-indicator';

const detailsWithData = (View) => {

    return class extends React.Component {
        state = {
            item: null,
            loading: false,
            error: false,
            image: null
        }

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps) {
            if ( prevProps.itemId !== this.props.itemId ) {
                this.updateItem();
                this.setState({ loading: true });
                if ( !this.props.itemId ) {
                    this.setState({ loading: false });
                }
            }
        }
        
        updateItem() {
            const { itemId, getData, getImageURL } = this.props;
            console.log(itemId)
            if ( !itemId ) {
                this.setState(
                    {
                        item: null,
                        loading: false,
                        error: false,
                        image: null
                    }
                );
                return;
            }
            
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
            console.log(item);
            if ( !item && !loading ) return <p>Choose interesting item</p>

            console.log(1111);

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
