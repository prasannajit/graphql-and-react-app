const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const BlockAPI = require('./datasources/block-api');

const port = process.env.PORT || 4000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            blockAPI: new BlockAPI()
        };
    }
});

server.listen(port).then(() => {
    console.log(`Server running `);
})