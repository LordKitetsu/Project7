const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');

require("dotenv").config();


const app = express();

const sequelize = new Sequelize('mysql:groupomania.db', 'LordKitetsu', '', {
    host: 'localhost',
    dialect: mysql
  });


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin',  '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Access-Control-Allow-Headers, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.set('trust-proxy', 1); // Fais confiance au premier proxy
app.use(session({
  secret: cookiePass,
  cookie: { secure: true,
            httpOnly: true,
            domain: '*'
          },
  resave: true,
  saveUninitialized: false
  })
);

app.use(helmet());

app.use(bodyParser.json());






module.exports = app; 