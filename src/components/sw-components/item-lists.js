import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiServices } from '../hoc-helpers';
// import SwapiService from '../../services/swapi-service';

// const swapiService = new SwapiService();
// const { getAllPeople, getAllPlanets, getAllStarShips } = swapiService;

const AddChildFunc = (Wrapper, func) => {
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



const PersonList = withSwapiServices( withData(AddChildFunc(ItemList, renderNameAndGender)), {getData: 'getAllPeople'});
const PlanetList = withSwapiServices( withData(AddChildFunc(ItemList, renderName)), {getData: 'getAllPlanets'});
const StarshipList = withSwapiServices( withData(AddChildFunc(ItemList, renderModelAndLength)), {getData: 'getAllStarShips'});

export {
    PersonList,
    PlanetList,
    StarshipList
}