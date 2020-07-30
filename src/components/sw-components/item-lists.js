import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarShips } = swapiService;

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

const PersonList = withData(AddChildFunc(ItemList, renderNameAndGender), getAllPeople)
const PlanetList = withData(AddChildFunc(ItemList, renderName), getAllPlanets)
const StarshipList = withData(AddChildFunc(ItemList, renderModelAndLength), getAllStarShips)

export {
    PersonList,
    PlanetList,
    StarshipList
}