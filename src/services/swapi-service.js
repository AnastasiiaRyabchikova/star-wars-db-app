
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
      return res.results;
    }
    getPersonById(id) {
      return this.getResource(`/people/${id}`)
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    }
    getPlanetById(id) {
      return this.getResource(`/planet/${id}`)
    }
  
    async getAllStarShips() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
    getStarShipById(id) {
      return this.getResource(`/starships/${id}`)
    }
}