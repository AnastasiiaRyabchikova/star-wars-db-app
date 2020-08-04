import ItemDetails from '../item-details';
import { detailsWithData, withSwapiServices } from '../hoc-helpers';

const PersonDetails = withSwapiServices(detailsWithData(ItemDetails), {getData: 'getPersonById', getImageURL: 'getPersonImage'})
const PlanetDetails = withSwapiServices(detailsWithData(ItemDetails), {getData: 'getPlanetById', getImageURL: 'getPlanetImage'});
const StarshipDetails = withSwapiServices(detailsWithData(ItemDetails), {getData: 'getStarShipById', getImageURL: 'getStarShipImage'});

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}