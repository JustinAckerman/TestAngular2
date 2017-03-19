mongo ds058739.mlab.com:58739/foxingworthtestdb -u foxingworth -p abc123


 "start": "tsc && concurrently \"tsc -w\" \"lite-server\" ",

  "node": "tsc && concurrently \"tsc -w\" \"nodemon src/server/index.js\" ",
    "start": "concurrently \"mongod\" \"ng build -w\" \"nodemon src/server/app.js\"",
    "prod": "concurrently \"mongod\" \"ng build -aot -prod\" \"node src/server/app.js\""