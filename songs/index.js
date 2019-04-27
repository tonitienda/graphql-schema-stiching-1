const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const schema = require('./schema')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const server = new ApolloServer({
  playground: {
    endpoint: '/api',
    settings: {
      'editor.cursorShape': 'block',
      'editor.cursorColor': '#000',
      'editor.theme': 'light'
    }
  },
  schema
})

server.applyMiddleware({ app, path: '/api' })

app.listen(3000, () => {
  console.log('Song services listening to 3000...')
})
