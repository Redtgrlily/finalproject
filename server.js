const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const antd = require('antd');
const axios = require('axios');
const concurrently = require('concurrently');
const mailer = require('mailer');
const materialui = require('material-ui');
const materialize = require('materialize');
const mongooseTypeURL = require('mongoose-type-url');
const react = require('react');
const reactBootstrap = require('react-bootstrap');
const reactDOM = require('react-dom');
const reactDynamicForms = require('react-dynamic-forms');
const reactRedux = require('react-redux');
const reactStackGrid = require('react-stack-grid');
const reactTapEventPlugin = require('react-tap-event-plugin');
const redux = require('redux');


const db = require("./models");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dbUser:<password>@courierbase001-g7ts0.mongodb.net/test?retryWrites=true"); //mongodb://localhost/fullstack-jeopardy

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());


app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})
