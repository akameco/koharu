import Datastore from 'nedb'

let db = new Datastore('./data/dic.db')
let j = require('../data/pn_ja.json')

db.loadDatabase(err => {
  db.insert(j)
  db.find({name: /美人/}, (err,docs) => {
    if(err) console.log(err);
    console.log(docs);
  })
})

function createDB(json) {
  // すでにデータが有る場合
  db.find({}, (err, docs) => {
    console.log(docs.length);
  })
  db.loadDatabase(err => {
    // db.insert(json)
  })
}
