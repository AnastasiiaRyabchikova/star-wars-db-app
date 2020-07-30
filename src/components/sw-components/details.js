import ItemDetails from '../item-details';
import { detailsWithData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPersonById,
    getPlanetById,
    getStarShipById,
    getPersonImage,
    getStarShipImage,
    getPlanetImage
} = swapiService;

const PersonDetails = detailsWithData(ItemDetails, getPersonById, getPersonImage);
const PlanetDetails = detailsWithData(ItemDetails, getPlanetById, getPlanetImage);
const StarshipDetails = detailsWithData(ItemDetails, getStarShipById, getStarShipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}