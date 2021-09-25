import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { DataGrid } from '@mui/x-data-grid';
import Loader from '../Loader/';
import { StyledSection } from './styled';

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

const columns = [
    {
        field: 'hash', headerName: 'Hash', width: 500, renderCell: (props) => {
            return <a href={`/blocks/${props.formattedValue}`}>{props.formattedValue}</a>
        }
    },
    {
        field: 'height',
        headerName: 'Height',
        type: 'number',
        width: 150,
    },
    {
        field: 'time',
        headerName: 'Time',
        type: 'number',
        width: 150,
    },
    {
        field: 'block_index',
        headerName: 'Block Index',
        type: 'number',
        width: 150,
    }
];

const Blocks = () => {
    const { loading, error, data } = useQuery(GET_BLOCKS, {
        variables: { blocksTimestamp: '1573858800000' },
    });
    if (loading) {
        return <><Loader /></>;
    } else if (data) {
        // Data-grid component requires a unique id property for each row
        const rows = data.blocks.map((block) => {
            const updatedBlock = { ...block, id: block.hash };
            return updatedBlock;
        });
        return (
            <StyledSection>
                <h1>Blockchain</h1>
                <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                    />
                </div>
            </StyledSection>
        );
    } else if (error) {
        return <>Error. Please refresh the page</>;
    }
};

export default Blocks;