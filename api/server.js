const express = require('express')
const bodyParser = require('body-parser')


const data = [
  {
    "text": " ",
    "sender":{
      "name": ""
    },
    "time": ""
  }
]


const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.route('/chatroom')
  .get((req, res) => res.send(data))
  .post((req, res) => {
    console.log(req.body)
    const message = {
      text: req.body.message,
      sender: {
        name: req.body.username
      },
      time: Date.now()
    }
    data.push(message)
    res.status(201)
    res.json(message)
  })

module.exports = app
