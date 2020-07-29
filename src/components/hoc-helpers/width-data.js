import React from 'react';
import LoadIndicator from '../load-indicator';
import ErrorIndicator from '../load-indicator';

const withData = (View, getData) => {
    return class extends React.Component {
        state = {
            data: null,
            error: false
        }

        componentDidMount() {
            getData()
                .then((data) => this.setState({data, error: false}))
                .catch(this.onError)
        }

        onError() {
            this.setState({error: false});
        }
    

        render() {
            const {data, error} = this.state;
        
        
            if(!data) {
                return <LoadIndicator />;
            }
            if(error) {
                return <ErrorIndicator />;
            }
    
            return <View {...this.props} data={data} />
        }
    }
}

export default withData;
