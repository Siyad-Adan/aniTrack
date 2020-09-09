/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserAnimes
// ====================================================

export interface UserAnimes_userAnimes_animes {
  __typename: "Anime";
  mal_id: number;
  image: string;
  title: string;
  airing: boolean;
  synopsis: string;
  episodes: number;
  rated: string;
  type: string;
}

export interface UserAnimes_userAnimes {
  __typename: "User";
  id: string;
  username: string;
  animes: (UserAnimes_userAnimes_animes | null)[];
}

export interface UserAnimes {
  userAnimes: UserAnimes_userAnimes;
}
