import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Loader from '../Loader/';
import { getColumns } from './helpers';
import { GET_BLOCK_DETAILS } from './query';
import { LinkWrapper } from './styled';

const BlockDetails = () => {
    // Get the query params to retrieve the hash
    const params = useParams();
    const { loading, error, data } = useQuery(GET_BLOCK_DETAILS, {
        variables: { blockHash: params.hash },
    });
    if (loading) {
        return <><Loader /></>;
    } else if (data) {
        // Data-grid component requires a unique id property for each row
        const rows = data.block.tx.map((txn) => {
            const updatedTxn = { ...txn, id: txn.hash };
            return updatedTxn;
        });
        return <>
            <h1>Block Details</h1>
            <p>Block Index: {data.block.block_index}</p>
            <p>Block Size: {data.block.size}</p>
            <p>Previous Block: {data.block.prev_block}</p>
            <br></br>
            <h3>Transactions</h3>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={getColumns()}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                />
            </div>
            <LinkWrapper>
                <Link to="/blocks">Back to Blocks Page</Link>
            </LinkWrapper>
        </>
    } else if (error) {
        return <>Error. Please refresh the page</>
    }
};

export default BlockDetails;