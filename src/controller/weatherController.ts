import axios from 'axios';
import { ILocation, ILocationResponse, ILocationCoordinates } from '../model/weatherModel';
import { config } from '../config/config';

const getLocationCoord = async (location: ILocation, limit: number): Promise<ILocationCoordinates> => {
  //   const fetch = require('node-fetch');
  let query: string = config.weather.base_url;
  query += config.weather.geo_path;
  query += `q=${location.city},${location.state},${location.country}`;
  query += `&limit=${limit.toString()}`;
  query += `&appid=${config.weather.key}`;

  const response: any = await axios.get(query);
  //   console.log('Testing: ', response.data);
  const tmpJson = await response.data;
  const { lat, lon } = tmpJson[0];

  //   console.log('Testing - tmpJson', tmpJson);
  //   const tmpJson2 = tmpJson[0];
  //   console.log('Testing - tmpJson2: ', tmpJson2);

  const ret = { lat: lat, lon: lon };

  return ret;
};

export { getLocationCoord };
