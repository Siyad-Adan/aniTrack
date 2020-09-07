import { animes } from "../animes";
import { Anime } from "../interfaces";
import { IResolvers } from "apollo-server-express";

export const resolvers: IResolvers = {
  Query: {
    animes: (): Array<Anime> => {
      return animes;
    },
  },
  Mutation: {
    deleteAnime: (_root: undefined, { id }: { id: string }): Anime => {
      for (let i = 0; i < animes.length; i++) {
        if (animes[i].id === id) {
          return animes.splice(i, 1)[0];
        }
      }

      throw new Error("failed to delete anime");
    },
    addAnime: (
      _root: undefined,
      { id, image, title, airing, synopsis, type, episodes, rated }: Anime
    ): Anime => {
      try {
        const newAnime = {
          id,
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
