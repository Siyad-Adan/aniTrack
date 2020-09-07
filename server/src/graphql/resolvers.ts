import { animes } from "../animes";
import { Anime } from "../lib";
import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";

export const resolvers: IResolvers = {
  Query: {
    animes: (): Array<Anime> => {
      return animes;
    },
  },
  Mutation: {
    deleteAnime: (_root: undefined, { _id }: { _id: ObjectId }): Anime => {
      for (let i = 0; i < animes.length; i++) {
        if (animes[i]._id === _id) {
          return animes.splice(i, 1)[0];
        }
      }

      throw new Error("failed to delete anime");
    },
    addAnime: (
      _root: undefined,
      {
        _id,
        mal_id,
        image,
        title,
        airing,
        synopsis,
        type,
        episodes,
        rated,
      }: Anime
    ): Anime => {
      try {
        const newAnime = {
          _id,
          mal_id,
          image,
          title,
          airing,
          synopsis,
          type,
          episodes,
          rated,
        };

        animes.push(newAnime);

        return newAnime;
      } catch (err) {
        throw new Error("Failed to add anime");
      }
    },
  },
};
