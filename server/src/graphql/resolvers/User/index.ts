import { User, Database } from "../../../lib";
import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";

export const userResolvers: IResolvers = {
  Query: {
    userAnimes: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<User> => {
      const data: User[] = await db.users
        .find({
          _id: new ObjectId(id),
        })
        .toArray();

      return data[0];
    },
  },
  Mutation: {
    deleteAnime: async (
      _root: undefined,
      { id, mal_id }: { id: string; mal_id: number },
      { db }: { db: Database }
    ): Promise<number> => {
      const deleteResult = await db.users.updateOne(
        { _id: new ObjectId(id) },
        { $pull: { animes: { mal_id } } }
      );

      if (!deleteResult.result.nModified)
        throw new Error(`Deletion of anime with id ${mal_id} failed`);
      return deleteResult.result.nModified;
    },
    addAnime: async (
      _root: undefined,
      {
        id,
        mal_id,
        image,
        title,
        airing,
        synopsis,
        type,
        episodes,
        rated,
      }: {
        id: number;
        mal_id: number;
        image: string;
        title: string;
        airing: boolean;
        synopsis: string;
        type: string;
        episodes: number;
        rated: string;
      },
      { db }: { db: Database }
    ): Promise<number> => {
      try {
        const addResult = await db.users.updateOne(
          { _id: new ObjectId(id) },
          {
            $push: {
              animes: {
                mal_id,
                image,
                title,
                airing,
                synopsis,
                type,
                episodes,
                rated,
              },
            },
          }
        );

        return addResult.result.nModified;
      } catch (err) {
        throw new Error(`Failed to add anime : error ${err}`);
      }
    },
  },
  User: {
    //using root here to access parent resolver
    id: (user: User): string => user._id.toString(),
  },
};
