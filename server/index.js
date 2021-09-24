const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const BlockAPI = require('./datasources/block-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            blockAPI: new BlockAPI()
        };
    }
});

server.listen(4000).then(() => {
    console.log(`Server running `);
})