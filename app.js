
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routesNavigation = require('./src/routesNavigation')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.use('/api', routesNavigation)

app.get('*', (req, res) => {
  res.status(404).send('Not Found Please Check again ! :)')
})

app.listen(port, () => {
  console.log('Express app is Listening on port 3000')
})