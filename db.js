var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://azmal_sk1:Azmal123@cluster.0srosxa.mongodb.net/";
const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    const db = client.db('MyDb');
    var obj ={
      statusCode:200,
      mesg:"Database Connection Success",
      database:db
    };
    return obj;
  } catch (error) {
    var obj ={
      statusCode:200,
      mesg:error
    };
    console.log(obj);
    return obj;
  }finally {
    await client.close();
  }
}

module.exports = connect;
