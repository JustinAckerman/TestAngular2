"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//const Heroes = require('./data');
var Heroes = [
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
var HeroRouter = (function () {
    /**
     * Initialize the HeroRouter
     */
    function HeroRouter() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Heroes.
     */
    HeroRouter.prototype.getAll = function (req, res, next) {
        res.send(Heroes);
    };
    /**
     * GET one hero by id
     */
    HeroRouter.prototype.getOne = function (req, res, next) {
        var query = parseInt(req.params.id);
        var hero = Heroes.find(function (hero) { return hero.id === query; }); //TODO revisit type here
        if (hero) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                hero: hero
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No hero found with the given id.',
                status: res.status
            });
        }
    };
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    HeroRouter.prototype.init = function () {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    };
    return HeroRouter;
}());
exports.HeroRouter = HeroRouter;
// Create the HeroRouter, and export its configured Express.Router
var heroRoutes = new HeroRouter();
heroRoutes.init();
exports.default = heroRoutes.router;
//# sourceMappingURL=HeroRouter.js.map