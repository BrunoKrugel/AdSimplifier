import { MongoClient } from 'mongodb';

const options = {};
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add Mongo URI to .env');
}

const client = new MongoClient(process.env.MONGODB_URI, options);

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
