import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Anime {
    id: ID!
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
    animes: [Anime!]!
  }

  type Mutation {
    deleteAnime(id: ID!): Anime!
    addAnime(
      id: String!
      image: String!
      title: String!
      airing: Boolean!
      synopsis: String!
      type: String!
      episodes: Int!
      rated: String!
    ): Anime!
  }
`;
