  var express = require('express');
var app = express();
app.use(express.static('dist'));
var data= require('./articoli.json');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('articoli.json')
const db = low(adapter)

/* 
// Set some defaults
db.defaults({ posts: [], user: {} })
  .write()
 
// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()
 
// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode')
  .write()

  // Use .value() instead of .write() if you're only reading from db
db.get('posts')
  .find({ id: 1 })
  .value()

*/

app.get('/article', function (req, res) {
  res.setHeader('Content-Type','application/json')
  /*res.send(db.get('articoli'));*/
  res.send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
