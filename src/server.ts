import express, { Application, Request, Response, NextFunction } from 'express';
import { config } from './config/config';
import Logging from './library/Logging';

const server: Application = express();

// Log incomming and outgoing reques and response.
server.use((req: Request, res: Response, next: NextFunction) => {
  /** Log the Request */
  Logging.info(`Incomming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

  /** Log the Response */
  res.on('finish', () => {
    Logging.info(`Outgoing -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
  });

  // Calling next() allows us to pass through
  // this piece of middleware instead of stopping here.
  next();
});

// Only accept JSON requests and extended means several layers are OK.
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// API rules
server.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'Options') {
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    return res.status(200).json({});
  }

  next();
});

// Server working check
server.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({ message: 'pong' });
});

// Catch all
server.use((req: Request, res: Response) => {
  const error = new Error('not found');
  Logging.error(error);

  return res.status(404).json({ message: error.message });
});

server.listen(config.server.port, (): void => {
  Logging.info(`Server running on port: ${config.server.port}`);
});
