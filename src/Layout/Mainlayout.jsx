import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav';

const Mainlayout = () => {
    return (
        <div className='mx-5 md:mx-20 '>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;