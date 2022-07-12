const data = {
  /**
   * devDependencies and dependencies lists the necessary modules that needs to be loaded.
   * Each provided with an explanation as to what they are used for and/or what they provide.
   */
  "name": "travelagent-backend",
  "version": "0.0.1",
  "description": "Backend support for the travel agent front",
  "main": "index.js",
  "scripts": {
    "build": "rm -rf build/ && tsc",
    "start": "node build/server.js",
    "server:dev": "nodemon --exec ./node_modules/.bin/ts-node src/server.ts",
    "test:all": "jest --coverage",
    "test": "jest -o --detectOpenHandles"
  },
  "author": "Chris Johannesson",
  "license": "MIT",
  "devDependencies": {
    "@types/express": "^4.17.13", // This package contains type definitions for Express
    "@types/jest": "^28.1.4", // This package contains type definitions for Jest 
    "@types/node": "^18.0.3", // This package contains type definitions for Node.js
    "@types/supertest": "^2.0.12", // This package contains type definitions for SuperTest
    "chalk": "^4.1.2", // Terminal string styling for console.log etc.
    "jest": "^28.1.2", // JavaScript Testing
    "nodemon": "^2.0.19", /* nodemon is a tool that helps develop Node.js based 
        applications by automatically restarting the node application when 
        file changes in the directory are detected.
    */
    "supertest": "^6.2.4", // HTTP assertions made easy via superagent
    "ts-jest": "^28.0.5", /* A Jest transformer with source map support that 
        lets you use Jest to test projects written in TypeScript.
    */
    "ts-node": "^10.8.2", /* TypeScript execution and REPL for node.js, 
        with source map and native ESM support.
    */
    "typescript": "^4.7.4" // TypeScript is a language for application-scale JavaScript. 
  },
  "dependencies": {
    "axios": "^0.27.2", // Promise based HTTP client for the browser and node.js
    "dotenv": "^16.0.1", /* Dotenv is a zero-dependency module that loads 
        environment variables from a .env file into process.env. Storing 
        configuration in the environment separate from code is based on 
        The Twelve-Factor App methodology.
    */
    "express": "^4.18.1" // Fast, unopinionated, minimalist web framework for node.
  }
}
