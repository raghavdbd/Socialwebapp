const express = require('express')
const app = express()
const port = 8000;
app.use('/',require('./routes'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, function(err) {
  console.log(`Example app listening on port ${port}`)
})