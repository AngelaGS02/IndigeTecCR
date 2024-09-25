
//Maneja la conexión

import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/';
const options = {};

let client;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
