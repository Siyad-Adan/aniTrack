export interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  image: string;
  airing: boolean;
  type: string;
  episodes: number;
  rated: string;
}

export interface UserInfo {
  id: string;
  username: string;
  animes: Anime[];
}

export interface UserInfoData {
  userAnimes: UserInfo;
}

export interface UserAnimeDeleteData {
  deleteAnime: number;
}

export interface UserAnimeDeleteVariables {
  id: string;
  mal_id: number;
}

export interface UserAnimeAddData {
  addAnime: number;
}

export interface UserAnimeAddVariables extends Anime {
  id: string;
}
