import React, { FC, useState, useEffect } from "react";
import { server } from "../../lib/api";

import {
  UserInfo,
  UserInfoData,
  UserAnimeDeleteData,
  UserAnimeDeleteVariables,
  UserAnimeAddData,
  UserAnimeAddVariables,
  Anime,
} from "./types";
import { stringify } from "querystring";

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
mutation deleteUserAnime($id: ID!, $mal_id: Int! ){
    deleteAnime(id: $id, mal_id : $mal_id)
  }
`;

const ADDUSERANIME = `
mutation addAnimes($id: ID!, $mal_id: Int!, $image: String!, $title: String!, $airing: Boolean!, $synopsis: String!, $type: String!, $episodes: Int!, $rated: String!){
  addAnime(id: $id, mal_id: $mal_id, image: $image, title: $title, airing: $airing, synopsis: $synopsis, type: $type, episodes: $episodes, rated: $rated)
}
`;

export const User: FC<Props> = ({ title, children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: "",
    username: "testing",
    animes: [],
  });

  useEffect(() => {
    fetchUserInfo();
  }, [userInfo]);

  const fetchUserInfo = async () => {
    const { data } = await server.fetch<UserInfoData>({ query: USERINFO });
    setUserInfo(data.userAnimes);
  };

  const deleteUserAnime = async (id: string, mal_id: number) => {
    const { data } = await server.fetch<
      UserAnimeDeleteData,
      UserAnimeDeleteVariables
    >({
      query: DELETEUSERANIME,
      variables: {
        id,
        mal_id,
      },
    });

    const userInfoAnimesTemp: Anime[] = userInfo.animes;

    userInfoAnimesTemp.splice(
      userInfoAnimesTemp.findIndex((anime) => anime.mal_id === mal_id),
      1
    );

    setUserInfo({
      id: id,
      username: userInfo.username,
      animes: userInfoAnimesTemp,
    });
  };

  const addUserAnime = async () => {
    const { data } = await server.fetch<
      UserAnimeAddData,
      UserAnimeAddVariables
    >({
      query: ADDUSERANIME,
      variables: {
        id: "5f569c5d69573b79b5db51ea",
        mal_id: 200,
        image: "Test",
        title: "Test",
        airing: false,
        synopsis: "Test",
        type: "Test",
        episodes: 200,
        rated: "Test",
      },
    });

    const newAnime: Anime = {
      mal_id: 200,
      image: "Test",
      title: "Test",
      airing: false,
      synopsis: "Test",
      type: "Test",
      episodes: 200,
      rated: "Test",
    };

    const newAnimeList: Anime[] = userInfo.animes;
    newAnimeList.push(newAnime);

    setUserInfo({
      id: userInfo.id,
      username: userInfo.username,
      animes: newAnimeList,
    });
  };

  const userData = userInfo ? (
    <div>
      <p>{userInfo.id ? userInfo.username : ""}</p>
      <ul>
        {userInfo.animes.map((anime, idx) => {
          return (
            <li key={idx}>
              {anime.synopsis}
              <button
                onClick={() => deleteUserAnime(userInfo.id, anime.mal_id)}
              >
                Delete anime
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;

  return (
    <div>
      <h2>
        {title} {children}
      </h2>
      {userData}
      <button onClick={fetchUserInfo}> User Info </button>
      <button onClick={addUserAnime}> Add Anime </button>
    </div>
  );
};
