import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    animes: [Anime]!
  }

  type Anime {
    mal_id: Int!
    image: String!
    title: String!
    airing: Boolean!
    synopsis: String!
    type: String!
    episodes: Int!
    rated: String!
    rating: Int!
  }

  type Query {
    userAnimes(id: ID!): [User!]!
  }

  type Mutation {
    deleteAnime(id: ID!, mal_id: Int!): Int!
    addAnime(
      id: ID!
      mal_id: Int!
      image: String!
      title: String!
      airing: Boolean!
      synopsis: String!
      type: String!
      episodes: Int!
      rated: String!
    ): Int!
  }
`;
