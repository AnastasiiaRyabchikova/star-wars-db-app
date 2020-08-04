import ItemDetails from '../item-details';
import { detailsWithData, withSwapiServices, compose } from '../hoc-helpers';

const PersonDetails = compose(
    withSwapiServices({getData: 'getPersonById', getImageURL: 'getPersonImage'}),
    detailsWithData
)(ItemDetails);


const PlanetDetails = compose(
    withSwapiServices({getData: 'getPlanetById', getImageURL: 'getPlanetImage'}),
    detailsWithData
)(ItemDetails);

const StarshipDetails = compose(
    withSwapiServices({getData: 'getStarShipById', getImageURL: 'getStarShipImage'}),
    detailsWithData
)(ItemDetails);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}