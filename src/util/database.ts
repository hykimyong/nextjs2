import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient('mongodb+srv://admin:1234@cluster0.ip0hlgj.mongodb.net/?retryWrites=true&w=majority');
            
    await client.connect();
        
    const db: mongoDB.Db = client.db('forum');
   
    const gamesCollection: mongoDB.Collection = db.collection('post');
 
  collections.games = gamesCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
 }

export const collections: { games?: mongoDB.Collection } = {}