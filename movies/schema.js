const { makeExecutableSchema } = require("graphql-tools");
const gql = require('graphql-tag')

const movies = [
    { id: 1, title: "The Bodyguard", mainSongId: 1 },
    { id: 2, title: "8 Mile", mainSongId: 2 },
    { id: 3, title: "Rocky III", mainSongId: 3 },
    { id: 4, title: "Men in Black", mainSongId: 4 },
    { id: 5, title: "Back to the Future", mainSongId: 5 },
    { id: 6, title: "Titanic", mainSongId: 6 }
];

const typeDefs = gql`
  type Query {
    movies: [Movie]
    movie(movieId: ID!): Movie
  }
  type Movie {
    id: ID!
    title: String!
    mainSongId: ID!
  }
`;

const resolvers = {
    Query: {
        movies: () => {
            return movies;
        },
        movie(parent, args, context, info) {
            return movies.find(movie => movie.id === Number(args.movieId));
        }
    }
};

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
});
