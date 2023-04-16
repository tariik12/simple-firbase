import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={{gap:'10px'}}>
            <Link to='/'>Home</Link> 
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;