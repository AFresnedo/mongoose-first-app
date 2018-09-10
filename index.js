const express = require('express');

const app = express();

// looks for index.js and runs that code
const db = require('./models');

//
// middleware
//

app.get('/', (req, res) => {
  // find is find all?
  db.User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

app.get('/createuser', (req, res) => {
  db.User.create({
    name: 'Star Wars Character',
    image: 'http://www.facetheforce.today/random/400?r=1',
    birthyear: Math.floor(Math.random() * 80) + 1950,
    admin: Math.random() < 0.5 ? true : false
  })
    .then(result => {
      res.send('success');
    }).catch(err => {
      console.log(err)
      res.send('errzors, check log');
    });
});

app.listen(3000);
