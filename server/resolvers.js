const resolvers = {
    Query: {
        // returns an array of block that will be used to populate
        // the homepage
        blocks: (_, { timestamp }, { dataSources }) => {
            return dataSources.blockAPI.getBlocks(timestamp);
        },
        // returns a particular block's details
        block: (_, { hash }, { dataSources }) => {
            return dataSources.blockAPI.getBlockDetails(hash);
        },
    },
};

module.exports = resolvers;