const { makeExecutableSchema } = require("graphql-tools");
const gql = require('graphql-tag')

const songs = [
  { id: 1, title: "I will always love you" },
  { id: 2, title: "Lose yourself" },
  { id: 3, title: "Eye of the tiger" },
  { id: 4, title: "Men in Black" },
  { id: 5, title: "The power of love" },
  { id: 6, title: "My Heart will go on" }
];

const typeDefs = gql`
  type Query {
    songs: [Song]
    song(songId: ID!): Song
  }
  type Song {
    id: ID
    title: String
  }
`;

const resolvers = {
  Query: {
    songs: () => {
      return songs;
    },
    song(parent, args, context, info) {
      return songs.find(song => song.id === Number(args.songId));
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
