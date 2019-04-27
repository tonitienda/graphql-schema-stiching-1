const {
    introspectSchema,
    makeRemoteExecutableSchema,
    mergeSchemas,
} = require("graphql-tools")
const { createHttpLink } = require("apollo-link-http");
const fetch = require("node-fetch");


const MoviesUrl = 'http://localhost:3001/api'
const SongsUrl = 'http://localhost:3000/api'


async function createServiceSchema(url) {
    const link = createHttpLink({
        uri: url,
        fetch
    });
    const schema = await introspectSchema(link);

    return makeRemoteExecutableSchema({
        schema,
        link
    });
}

async function createSchemas() {
    const movieSchema = await createServiceSchema(SongsUrl);
    const songsSchema = await createServiceSchema(MoviesUrl);

    console.log('here')
    return mergeSchemas({ schemas: [songsSchema, movieSchema] })
}

module.exports = createSchemas()
