import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import HeroRouter from './HeroRouter';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    console.log("constructing server app");
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
     
    this.express.use('/', express.static(__dirname + '/../../../../dist'));

    //api routes
    this.express.use('/api/v1/heroes5', HeroRouter);

      // all other routes are handled by Angular
    // let router = express.Router();  
    // router.get('/*', (req, res) => {
    //   res.sendFile(path.join(__dirname,'../../../index.html'));
    // });
    // this.express.use('/', router);
      this.express.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'../../../index.html'));
  });

  }

}

export default new App().express;
