import axios from 'axios';
import { ILocation, ILocationCoordinates, Units, IForecastResponse } from '../model/weatherModel';
import { config } from '../config/config';

const getLocationCoord = async (location: ILocation, limit: number): Promise<ILocationCoordinates> => {
  let query: string = config.weather.base_url;
  query += config.weather.geo_path;
  query += `q=${location.city},${location.state},${location.country}`;
  query += `&limit=${limit.toString()}`;
  query += `&appid=${config.weather.key}`;

  const response: any = await axios.get(query);
  const tmpJson = await response.data;
  const { lat, lon } = tmpJson[0];

  const ret = { lat: lat, lon: lon };

  return ret;
};

const getForecast = async (location: ILocationCoordinates, unit: string = 'standard', lang: string = 'en'): Promise<IForecastResponse> => {
  // console.log('location object: ', location);
  // console.log('input unit & lang: ', unit + ' : ' + lang);

  let query: string = config.weather.base_url;
  query += config.weather.forecast_path;
  query += `lat=${location.lat}&lon=${location.lon}`;
  query += `&units={unit}&lang=${lang}`;
  query += `&appid=${config.weather.key}`;

  // console.log('getForecast - query', query);

  const response = await axios.get(query);
  const tmpJson = await response.data;

  return tmpJson;

  // Promise<IForecastResponse>
};

export { getLocationCoord, getForecast };
