import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiServices, compose } from '../hoc-helpers';

const AddChildFunc = (func) => (Wrapper) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {func}
            </Wrapper>
        )
    }
}

const renderNameAndGender = ({name, gender}) => (<span>{name} ({gender})</span>);
const renderModelAndLength = ({name, length}) => (<span>{name} ({length})</span>);
const renderName = ({name}) => (<span>{name}</span>);



const PersonList = compose( 
    withSwapiServices({ getData: 'getAllPeople' }),
    withData,
    AddChildFunc(renderNameAndGender)
)(ItemList);

const PlanetsList = compose( 
    withSwapiServices({ getData: 'getAllPlanets' }),
    withData,
    AddChildFunc(renderName)
)(ItemList);

const StarshipList = compose( 
    withSwapiServices({ getData: 'getAllStarShips' }),
    withData,
    AddChildFunc(renderModelAndLength)
)(ItemList);

export {
    PersonList,
    PlanetsList,
    StarshipList
}