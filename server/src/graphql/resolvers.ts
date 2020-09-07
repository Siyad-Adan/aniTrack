import { Anime, Database } from "../lib";
import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";

export const resolvers: IResolvers = {
  Query: {
    animes: async (
      _root: undefined,
      _args: undefined,
      { db }: { db: Database }
    ): Promise<Anime[]> => {
      return await db.animes.find({}).toArray();
    },
  },
  Mutation: {
    deleteAnime: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Anime> => {
      const deleteResult = await db.animes.findOneAndDelete({
        _id: new ObjectId(id),
      });
      if (!deleteResult.value)
        throw new Error(`Deletion of anime with id ${id} failed`);
      return deleteResult.value;
    },
    addAnime: async (
      _root: undefined,
      { mal_id, image, title, airing, synopsis, type, episodes, rated }: Anime,
      { db }: { db: Database }
    ): Promise<Anime | null> => {
      try {
        const newAnime = {
          mal_id,
          image,
          title,
          airing,
          synopsis,
          type,
          episodes,
          rated,
        };

        const addResult = await db.animes.insert(newAnime);

        return db.animes.findOne({
          _id: addResult.insertedIds[0],
        });
      } catch (err) {
        throw new Error(`Failed to add anime : error ${err}`);
      }
    },
  },
  Anime: {
    id: (anime: Anime): string => anime._id.toString(),
  },
};
