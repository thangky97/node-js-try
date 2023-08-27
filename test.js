// var mongodb = require('mongodb').MongoClient;

// var url = 'mongodb+srv://admin:admin123@testdb.iqt6lky.mongodb.net/?retryWrites=true&w=majority';

// mongodb.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = data.db("mydb");
//     dbo.createCollection("Customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       data.close();
//     });
//   });

var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://admin:admin123@testdb.iqt6lky.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
