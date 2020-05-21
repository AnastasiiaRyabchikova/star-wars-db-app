
export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`)
      }
      const body = await res.json();
      return body
    }
    async gelAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map((people) => this._transformPerson(people));
    }
    async getPersonById(id) {
      const res = await this.getResource(`/people/${id}`);
      return this._transformPerson(res);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(planet => this._transformPlanet(planet));
    }
    async getPlanetById(id) {
      const planet = await this.getResource(`/planets/${id}`)
      return this._transformPlanet(planet);
    }
  
    async getAllStarShips() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(ship => this._transformStarShip(ship));
    }
    async getStarShipById(id) {
      const ship = await this.getResource(`/starships/${id}`);
      return this._transformStarShip(ship);
    }

    _extractId(string) {
      const idRegExp = /\/([0-9]*)\/$/;
      return string.match(idRegExp)[1];
    }
    _transformPlanet(planet) {
      
      return {
          id: this._extractId(planet.url),
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter

      }
    }
    _transformPerson(person) {
      
      return {
          id: this._extractId(person.url),
          name: person.name,
          gender: person.gender,
          birthYear: person.birthYear,
          eyeColor: person.eyeColor
      }
    }
    _transformStarShip(ship) {
      
      return {
        id: this._extractId(ship.url),
        name: ship.name,
        model: ship.model,
        manufacturer: ship.manufacturer,
        costInCredits: ship.costInCredits,
        length: ship.length,
        crew: ship.crew,
        passengers: ship.passengers,
        cargoCapacity: ship.cargoCapacity,
      }
    }
}