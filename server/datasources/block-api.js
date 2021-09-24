const { RESTDataSource } = require('apollo-datasource-rest');

/**
 * API class to trigger rest calls to blockchain.info endpoints
 */
class BlockAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://blockchain.info/';
    }

    // Fetches all the blocks based on provided timestamp
    getBlocks(timestamp){
        return this.get(`blocks/${timestamp}?format=json`);
    }

    // Fetches a specific block's data based on provided hash
    getBlockDetails(hash){
        return this.get(`rawblock/${hash}`);
    }
}

module.exports = BlockAPI;