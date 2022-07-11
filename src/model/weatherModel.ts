export interface ILocation {
  city: string;
  state?: string;
  country: string;
}

export interface ILocationResponse {
  name: string;
  local_names?: object;
  lat: number;
  lon: number;
  country: string;
}

export interface ILocationCoordinates {
  lat: number;
  lon: number;
}
