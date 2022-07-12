interface ILocation {
  city: string;
  state?: string;
  country: string;
}

interface IGeocodingResponse {
  name: string;
  local_names?: object;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

interface ILocationCoordinates {
  lat: number | string;
  lon: number | string;
}

interface Units {
  unit: 'standard' | 'metric' | 'imperial';
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface IClouds {
  all: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface ISys {
  pod: string;
}

interface IWeatherList {
  dt: number;
  main: IMain;
  weather: IWeather[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  pop: number;
  sys: ISys;
  dt_txt: string;
}

interface ICity {
  id: number;
  name: string;
  coord: ILocationCoordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface IForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherList[];
  city: ICity;
}

export { ILocation, IGeocodingResponse, ILocationCoordinates, Units, IForecastResponse };
