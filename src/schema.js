const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid (non-null lists of non-null tracks)"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The track's full duration, in seconds"
    durationInSeconds: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's description"
    description: String
    "The number of times this track has been seen"
    numberOfViews: Int
    modules: [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The Module's full duration, in seconds"
    durationInSeconds: Int
  }
`;

module.exports = typeDefs;
