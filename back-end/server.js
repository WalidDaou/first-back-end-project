const express = require ('express');
const bodyParser = require('body-parser')
const app = express();
const routesHandler = require('./routes/handler.js')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler)

const port = 4000;

app.listen(port, ()=>{
  console.log(`Serveris runing on port ${port}.`)
})
