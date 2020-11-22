import {beerApiUrl} from './api-url';

export default class BeerService {

  async getData(params = '') {
    const requestURL = beerApiUrl + params;
    const response = await fetch(requestURL);
    return await response.json();
  }

}