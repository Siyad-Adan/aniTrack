import { MongoClient } from "mongodb";
import { Database } from "../lib";

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}-shard-00-00.dpeho.mongodb.net:27017,${process.env.DB_CLUSTER}-shard-00-01.dpeho.mongodb.net:27017,${process.env.DB_CLUSTER}-shard-00-02.dpeho.mongodb.net:27017/main?ssl=true&replicaSet=atlas-10mhnk-shard-0&authSource=admin&retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("main");

  return {
    animes: db.collection("animes"),
  };
};
