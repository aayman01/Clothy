import { MongoClient } from "mongodb";

// Connection URL
const url = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = "fashionhub";

let client;
let db;

async function connectToDatabase() {
  if (db) return db;

  try {
    if (!client) {
      client = new MongoClient(url);
      await client.connect();
    }

    db = client.db(dbName);
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export async function getCollection(collectionName) {
  const db = await connectToDatabase();
  return db.collection(collectionName);
}

export async function findDocuments(collectionName, query = {}, options = {}) {
  const collection = await getCollection(collectionName);
  return collection.find(query, options).toArray();
}

export async function findDocument(collectionName, query = {}) {
  const collection = await getCollection(collectionName);
  return collection.findOne(query);
}

export async function insertDocument(collectionName, document) {
  const collection = await getCollection(collectionName);
  return collection.insertOne(document);
}

export async function updateDocument(collectionName, query, update) {
  const collection = await getCollection(collectionName);
  return collection.updateOne(query, { $set: update });
}

export async function deleteDocument(collectionName, query) {
  const collection = await getCollection(collectionName);
  return collection.deleteOne(query);
}

export async function countDocuments(collectionName, query = {}) {
  const collection = await getCollection(collectionName);
  return collection.countDocuments(query);
}

export async function aggregateDocuments(collectionName, pipeline) {
  const collection = await getCollection(collectionName);
  return collection.aggregate(pipeline).toArray();
}

export function closeConnection() {
  if (client) {
    client.close();
    console.log("MongoDB connection closed");
  }
}
