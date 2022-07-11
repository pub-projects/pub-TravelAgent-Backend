import dotenv from 'dotenv';

/**
 * Loads any environment variables we have in our batchrc file
 * inside our current environment or in our .env file in our root directory.
 *  */
dotenv.config();

// Using the "|| ''" to tell typescript it is a string and provide an empty string
//  if something goes wrong.
const WEATHER_KEY = process.env.WEATHER_API_KEY || '';
const EXCHANGE_KEY = process.env.EXCHANGE_API_KEY || '';

const SERVER_PORT = process.env.PORT || 3009;

export const config = {
  weather: {
    key: WEATHER_KEY,
  },
  exchange: {
    key: EXCHANGE_KEY,
  },
  server: {
    port: SERVER_PORT,
  },
};
