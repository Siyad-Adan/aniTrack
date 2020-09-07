import { MongoClient } from "mongodb";
import { dbData } from "./config";

export const connectDatabase = async (): Promise<{ animes: any }> => {
  const client = await MongoClient.connect(dbData.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("main");

  return {
    animes: db.collection("animes"),
  };
};
