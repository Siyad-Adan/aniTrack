import React, { FC } from "react";
import { useQuery, useMutation } from "react-apollo";
import { gql } from "apollo-boost";

import {
  UserAnimes as UserInfoData,
  deleteUserAnime as UserAnimeDeleteData,
  deleteUserAnimeVariables as UserAnimeDeleteVariables,
  addAnimes as UserAnimeAddData,
  addAnimesVariables as UserAnimeAddVariables,
  UserAnimes_userAnimes_animes as Anime,
} from "./__generated__";

interface Props {
  title: string;
}

const USERINFO = gql`
  query UserAnimes {
    userAnimes(id: "5f569c5d69573b79b5db51ea") {
      id
      username
      animes {
        mal_id
        image
        title
        airing
        synopsis
        episodes
        rated
        type
      }
    }
  }
`;

const DELETEUSERANIME = gql`
  mutation deleteUserAnime($id: ID!, $mal_id: Int!) {
    deleteAnime(id: $id, mal_id: $mal_id)
  }
`;

const ADDUSERANIME = gql`
  mutation addAnimes(
    $id: ID!
    $mal_id: Int!
    $image: String!
    $title: String!
    $airing: Boolean!
    $synopsis: String!
    $type: String!
    $episodes: Int!
    $rated: String!
  ) {
    addAnime(
      id: $id
      mal_id: $mal_id
      image: $image
      title: $title
      airing: $airing
      synopsis: $synopsis
      type: $type
      episodes: $episodes
      rated: $rated
    )
  }
`;

export const User: FC<Props> = ({ title }) => {
  const { data, refetch, loading, error } = useQuery<UserInfoData>(USERINFO);

  const [
    deleteAnime,
    { loading: deleteAnimeLoading, error: deleteAnimeError },
  ] = useMutation<UserAnimeDeleteData, UserAnimeDeleteVariables>(
    DELETEUSERANIME
  );

  const [
    addAnime,
    { loading: addAnimeLoading, error: addAnimeError },
  ] = useMutation<UserAnimeAddData, UserAnimeAddVariables>(ADDUSERANIME);

  const deleteUserAnime = async (id: string, mal_id: number) => {
    await deleteAnime({ variables: { id, mal_id } });

    refetch();

    // const userInfoAnimesTemp: Anime[] = userInfo.animes;

    // userInfoAnimesTemp.splice(
    //   userInfoAnimesTemp.findIndex((anime) => anime.mal_id === mal_id),
    //   1
    // );

    // setUserInfo({
    //   id: id,
    //   username: userInfo.username,
    //   animes: userInfoAnimesTemp,
    // });
  };

  const addUserAnime = async () => {
    await addAnime({
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

    // const newAnimeList: Anime[] = userInfo.animes;
    // newAnimeList.push(newAnime);

    // setUserInfo({
    //   id: userInfo.id,
    //   username: userInfo.username,
    //   animes: newAnimeList,
    // });

    refetch();
  };

  const userInfo = data ? data.userAnimes.username : null;
  const userAnimes = data ? data.userAnimes.animes : null;

  const userData = userInfo ? (
    <div>
      <p>{userInfo}</p>
      <ul>
        {userAnimes?.map((anime, idx) => {
          return (
            <li key={idx}>
              {anime!.synopsis}
              <button
                onClick={() =>
                  deleteUserAnime(data!.userAnimes.id, anime!.mal_id)
                }
              >
                Delete anime
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;

  const loadingItem = loading ? <h2>Loading...</h2> : "";
  const errorItem = error ? <h2>SOMETHING WENT WRONG ! :(</h2> : "";

  return (
    <div>
      {errorItem}
      {deleteAnimeError && <h2>Error Deleting Weeb Anime</h2>}
      {addAnimeError && <h2>Error Adding Weeb Anime</h2>}
      <h2>{title}</h2>
      {loadingItem}
      {deleteAnimeLoading && <h2>Deleting....</h2>}
      {addAnimeLoading && <h2>Adding anime...</h2>}
      {userData}
      <button onClick={addUserAnime}> Add Anime </button>
    </div>
  );
};
