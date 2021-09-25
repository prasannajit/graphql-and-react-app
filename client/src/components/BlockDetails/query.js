import { gql } from '@apollo/client';

// Graphql query to fetch blocks data
export const GET_BLOCK_DETAILS = gql`
    query GetBlockDetails($blockHash: String!) {
        block(hash: $blockHash) {
            size
            block_index
            prev_block
            tx {
            bits
            time
            block_index
            weight
            size
            fee
            hash
            }
        }
    }
`;
