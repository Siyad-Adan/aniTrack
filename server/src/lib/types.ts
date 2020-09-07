import { Collection, ObjectId } from "mongodb";

export interface User {
  _id: ObjectId;
  username: string;
  animes: Anime[];
}

export interface Anime {
  mal_id: number;
  image: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  rated: string;
}

export interface Database {
  users: Collection<User>;
}
