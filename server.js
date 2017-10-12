const cors = require('cors')

const express = require('express')
const bodyParser = require('body-parser')
const wc = require(__dirname + '/controller/weather_controller')

const app = express()
app.use(cors())

app.use(bodyParser.json())

const baseURL = '/api/weather/:city';

app.get( baseURL, wc.read );

const port = 3001;
app.listen(port, () => console.log("listening on port " + port))