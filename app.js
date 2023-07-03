const express = require('express')
const app = express()
var cors = require('cors')
 
app.use(cors())

app.get('/', function (req, res) {
  res.send('hello')
})

app.listen(3100, () => {
    console.log("Server is running!");
})
