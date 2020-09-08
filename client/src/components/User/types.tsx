interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  image: string;
  airing: boolean;
}

interface User {
  id: string;
  username: string;
  animes: Anime[];
}

export interface UserInfoData {
  userAnimes: User[];
}

export interface UserAnimeDeleteData {
  deleteAnime: number;
}

export interface UserAnimeDeleteVariables {
  id: string;
}

export interface UserAnimeAddData {
  addAnime: number;
}

export interface UserAnimeAddVariables {
  id: string;
}
