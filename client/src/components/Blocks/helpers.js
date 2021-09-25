import { Link } from 'react-router-dom';

export const getColumns = ()=>{
    const columns = [
        {
            field: 'hash', headerName: 'Hash', width: 500, renderCell: (props) => {
                return <Link to={`/blocks/${props.formattedValue}`}>{props.formattedValue}</Link>
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
    return columns;
};