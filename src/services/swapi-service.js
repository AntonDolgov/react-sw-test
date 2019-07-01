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

  getList = async ({ selectedCategory, selectedImageCategory }) => {
    const resource = await this.getResource(`/${selectedCategory}/`);

    return resource.results
        .map(this._transformData(selectedImageCategory));
  };

  getImageURL = ({selectedImageCategory, id}) => {
    return `${this._imageBase}/${selectedImageCategory}/${id}.jpg`
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformData = selectedImageCategory => data => {
    const id = this._extractId(data);

    return ({
      id,
      name: data.name,
      image: this.getImageURL({ selectedImageCategory, id })
    })
  };

  getPaginationLinks = async ({ selectedCategory }) => {
    const resource = await this.getResource(`/${selectedCategory}/`);

    return resource;
  };
}
