const { gql } = require('apollo-server');

const typedefs = gql`
type Query {
    "Query to get blocks for home page"
    blocks(timestamp: String!): [Block!]!
    "Query to get block details for details page"
    block(hash:String!): BlockDetails
}
"A block represents a block in blockchain"
type Block{
    hash: String!
    "the block height"
    height: Int!
    "the block time"
    time: Int!
    "the block index"
    block_index: Int!
}
"The details of a blockchain"
type BlockDetails{
    "the size of block"
    size: Int!
    "the block index"
    block_index: Int!
     "the previous block"
    prev_block: String!
    "a list of transactions"
    tx: [Transaction!]!
}
"A transaction details"
type Transaction {
    hash: String!
    "the transaction fee"
    fee: Int!
    "the transaction size"
    size: Int!
    "the transaction weight"
    weight: Int!
    "the transaction index"
    block_index: Int!
    "the transaction time"
    time: Int!
    "the transaction bits"
    bits: Int
  }
`;

module.exports = typedefs;