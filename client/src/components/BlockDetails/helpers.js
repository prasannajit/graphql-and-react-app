export const getColumns = () => {
    // Columns and their properties to be used by data-grid components
    const columns = [
        {
            field: 'hash', headerName: 'Hash', width: 500
        },
        {
            field: 'weight',
            headerName: 'Weight',
            type: 'number',
            width: 150,
        },
        {
            field: 'time',
            headerName: 'Time',
            width: 150,
            type: 'number',
        },
        {
            field: 'block_index',
            headerName: 'Block Index',
            type: 'number',
            width: 150,
        },
        {
            field: 'size',
            headerName: 'Size',
            type: 'number',
            width: 150,
        },
        {
            field: 'fee',
            headerName: 'Fee',
            type: 'number',
            width: 150,
        }
    ];
    return columns;
};