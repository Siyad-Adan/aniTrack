import { Collection, ObjectId } from "mongodb";

export interface Anime {
  _id: ObjectId;
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
  animes: Collection<Anime>;
}
