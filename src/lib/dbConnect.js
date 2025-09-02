import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const collectionNames={
  servicesCollection: "services"
}
let client;
let clientPromise;
if(!global._mongoClientPromise){
  client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
global._mongoClientPromise=client.connect()
}

clientPromise=global._mongoClientPromise
export default async function dbConnect(collectionName){
  const client =await clientPromise;
  const db=client.db(process.env.DB_NAME)
return db.collection(collectionName)
}
