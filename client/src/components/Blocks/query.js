import { gql } from '@apollo/client';

/** Blocks gql query to retrieve all blocks */
export const GET_BLOCKS = gql`
    query GetBlocks($blocksTimestamp: String!) {
        blocks(timestamp: $blocksTimestamp) {
            hash
            height
            time
            block_index
        }
    }
`;