const express = require('express');
const app = express();
const path = require('path');

const birds = require('./modules/example')

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', birds)

// app.use('/static', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//   res.send('hello')
// })

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})


app.listen(3333, () => {
  console.log('Application listening on port 3333!');
});

