import dotenv from 'dotenv';

/**
 * Loads any environment variables we have in our batchrc file
 * inside our current environment or in our .env file in our root directory.
 *  */
dotenv.config();

// Using the "|| ''" to tell typescript it is a string and provide an empty string
//  if something goes wrong.
const WEATHER_KEY = process.env.WEATHER_API_KEY || '';
const weather_base_url = process.env.WEATHER_BASE_URL || '';
const weather_geo_path = process.env.WEATHER_GEO_PATH || '';
const weather_current_path = process.env.WEATHER_CURRENT_PATH || '';
const weather_forecast_path = process.env.WEATHER_FORECAST_PATH || '';
const EXCHANGE_KEY = process.env.EXCHANGE_API_KEY || '';

const SERVER_PORT = process.env.SERVER_PORT || 3009;

export const config = {
  weather: {
    key: WEATHER_KEY,
    base_url: weather_base_url,
    geo_path: weather_geo_path,
    current_path: weather_current_path,
    forecast_path: weather_forecast_path,
  },
  exchange: {
    key: EXCHANGE_KEY,
  },
  server: {
    port: SERVER_PORT,
  },
};
