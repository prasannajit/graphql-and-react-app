import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (<>
        <h1>The requested page not found.</h1>
        <Link to="/blocks">Blocks Page</Link>
    </>);
};

export default PageNotFound;