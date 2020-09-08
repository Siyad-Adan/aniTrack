import React, { FC } from "react";
import { server } from "../../lib/api";

import {
  UserInfoData,
  UserAnimeDeleteData,
  UserAnimeDeleteVariables,
  UserAnimeAddData,
  UserAnimeAddVariables,
} from "./types";

interface Props {
  title: string;
}

const USERINFO = `
query UserAnimes{
  userAnimes(id: "5f569c5d69573b79b5db51ea"){
    id
    username
    animes{
      mal_id
      image
      title
      airing
      synopsis
    }
  }
}
`;

const DELETEUSERANIME = `
mutation deleteUserAnime($id: ID!){
    deleteAnime(id: $id, mal_id : 201)
  }
`;

const ADDUSERANIME = `
mutation addAnimes($id: ID!){
  addAnime(id: $id, mal_id: 201, image: "Test", title: "Test", airing: false, synopsis: "test", type: "Test", episodes: 200, rated: "PG-13")
}
`;

export const User: FC<Props> = ({ title, children }) => {
  const fetchUserInfo = async () => {
    const { data } = await server.fetch<UserInfoData>({ query: USERINFO });
    console.log(data.userAnimes);
  };

  const deleteUserAnime = async () => {
    const { data } = await server.fetch<
      UserAnimeDeleteData,
      UserAnimeDeleteVariables
    >({
      query: DELETEUSERANIME,
      variables: {
        id: "5f569c5d69573b79b5db51ea",
      },
    });

    console.log(data);
  };

  const addUserAnime = async () => {
    const { data } = await server.fetch<
      UserAnimeAddData,
      UserAnimeAddVariables
    >({
      query: ADDUSERANIME,
      variables: {
        id: "5f569c5d69573b79b5db51ea",
      },
    });

    console.log(data.addAnime);
  };

  return (
    <div>
      <h2>
        {title} {children}
      </h2>
      <button onClick={fetchUserInfo}> User Info </button>
      <button onClick={deleteUserAnime}> Delete Anime </button>
      <button onClick={addUserAnime}> Add Anime </button>
    </div>
  );
};
