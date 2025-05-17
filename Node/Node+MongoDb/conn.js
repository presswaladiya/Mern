const { MongoClient } = require('mongodb');

// Replace with your MongoDB connection string
const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('demo'); // use your DB name
    const collection = db.collection('user'); // collection name

    const result = await collection.insertOne({ name: 'Diya', age: 22 });
    console.log('Document inserted:', result.insertedId);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run()