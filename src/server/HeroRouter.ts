import {Router, Request, Response, NextFunction} from 'express';
//const Heroes = require('./data');

const Heroes = [
  {
    "id": 1,
    "name": "Luke Cage",
    "aliases": ["Carl Lucas", "Power Man", "Mr. Bulletproof", "Hero for Hire"],
    "occupation": "bartender",
    "gender": "male",
    "height": {
      "ft": 6,
      "in": 3
    },
    "hair": "bald",
    "eyes": "brown",
    "powers": [
      "strength",
      "durability",
      "healing"
    ]
  },
  {
    "id": 2,
    "name": "Spider-Man",
    "aliases": ["Dr. Peter Benjamin Parker", "Spidey", "Web-Sligner", "Spider-X-Man"],
    "occupation": "scientist",
    "gender": "male",
    "height": {
      "ft": 5,
      "in": 10
    },
    "hair": "brown",
    "eyes": "hazel",
    "powers": [
      "wall-crawling",
      "strength",
      "speed",
      "stamina",
      "durability",
      "agility",
      "healing",
      "reflexes",
      "Spider-Sense",
      "genius"
    ]
  },
  {
    "id": 3,
    "name": "Captain America",
    "aliases": [
      "Winghead",
      "Shield-Slinger",
      "the Captain",
      "Cap",
      "Yeoman America",
      "Sentinel of Liberty",
      "The Living Legend"
    ],
    "occupation": "special agent",
    "gender": "male",
    "height": {
      "ft": 6,
      "in": 2
    },
    "hair": "blonde",
    "eyes": "blue",
    "powers": [
      "strength",
      "speed",
      "durability",
      "agility",
      "reflexes",
      "stamina",
      "healing",
      "longevity"
    ]
  },
  {
    "id": 4,
    "name": "Iron Man",
    "aliases": [
      "Tony Stark",
      "Golden Gladiator",
      "Spare Parts Man",
      "Space-Knight"
    ],
    "occupation": "inventor",
    "gender": "male",
    "height": {
      "ft": 6,
      "in": 1
    },
    "hair": "black",
    "eyes": "blue",
    "powers": []
  },
  {
    "id": 5,
    "name": "Wolverine",
    "aliases": [
      "Logan",
      "Weapon X",
      "Death",
      "Agent Ten",
      "Fist of Legend"
    ],
    "occupation": "special agent",
    "gender": "male",
    "height": {
      "ft": 5,
      "in": 3
    },
    "hair": "black",
    "eyes": "blue",
    "powers": [
      "healing",
      "acute senses",
      "strength",
      "speed",
      "durability",
      "agility",
      "stamina",
      "weather adaptation",
      "animal empathy",
      "bone claws"
    ]
  }
];





export class HeroRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes);
  }

  /**
   * GET one hero by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    let query = parseInt(req.params.id);
    let hero = Heroes.find((hero:any) => hero.id === query); //TODO revisit type here
    if (hero) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          hero
        });
    }
    else {
      res.status(404)
        .send({
          message: 'No hero found with the given id.',
          status: res.status
        });
    }
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;
