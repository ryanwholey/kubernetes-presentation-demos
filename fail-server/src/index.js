const express = require('express')
const app = express()


let isAlive = true
let isReady = true

app.use(express.json())

app
.get('/alive', function (req, res) {
  console.log(`I am${isAlive ? ' ' : ' not '}alive`)

  return res.status(isAlive ? 200 : 500).send()
})
.post('/alive', function(req, res) {
  if (req.body.sleep) {
    if (isNaN(+req.body.sleep)) {

      return res.status(400).send(`${req.body.sleep} is not a number`)
    }

    console.log('setting isAlive to false')

    isAlive = false
    setTimeout(() => {console.log('Setting isAlive to true'); isAlive = true}, +req.body.sleep)
  }
  res.send()
})

app
.get('/ready', function (req, res) {
  console.log(`I am${isReady ? ' ' : ' not '}ready`)

  return res.status(isReady ? 200 : 500).send()
})
.post('/ready', function (req, res) {
  if (req.body.sleep) {
    if (isNaN(+req.body.sleep)) {

      return res.status(400).send(`${req.body.sleep} is not a number`)
    }

    console.log('setting isReady to false')

    isReady = false
    setTimeout(() => {console.log('Setting isReady to true'); isReady = true}, +req.body.sleep)
  }
  res.send()
})

app.listen(process.env.PORT || 3000)
