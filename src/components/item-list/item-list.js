import './item-list.css';

import React from 'react';
import LoadIndicator from '../load-indicator';
import ErrorIndicator from '../load-indicator';

export default class ItemList extends React.Component {
    state = {
        peopleList: null,
        error: false
    }
    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((list) => this.setState({peopleList: list, error: false}))
            .catch(this.onError)
    }
    onError() {
        this.setState({error: false});
    }
    render() {
        const {peopleList, error} = this.state;
        const {onItemSelected} = this.props;
        const renderItem = this.props.children;
        if(!peopleList) {
            return <LoadIndicator />;
        }
        if(error) {
            return <ErrorIndicator />;
        }
        return (
                <ul className='list-group'>
                    {
                        peopleList.map(({id, name, gender, birthYear}) => (
                            <Item 
                                key={id}
                                id={id}
                                onItemSelected={onItemSelected}
                                content={renderItem({name, gender, birthYear})}
                            />
                        ))
                    }
                </ul>
        )
    }
}
const Item = ({id, content, onItemSelected}) => {
    return <li onClick={() => onItemSelected(id)} className='list-group-item list-group__item'>{content}</li>
}