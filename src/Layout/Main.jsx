import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <h1>hello</h1>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;