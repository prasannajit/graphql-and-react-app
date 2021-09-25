import React from 'react';
import { useQuery } from '@apollo/client';
import { DataGrid } from '@mui/x-data-grid';
import Loader from '../Loader/';
import { getColumns } from './helpers';
import { GET_BLOCKS } from './query';
import { StyledSection } from './styled';

const Blocks = ({ timestamp }) => {
    const { loading, error, data } = useQuery(GET_BLOCKS, {
        variables: { blocksTimestamp: timestamp },
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
                        columns={getColumns()}
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