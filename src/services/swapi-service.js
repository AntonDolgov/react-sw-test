export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };
  }
