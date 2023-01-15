import React from 'react';
import Navigation from './Navbar/Navigation';
import User from './Navbar/User';
import { useMatch } from 'react-router-dom';
import Search from './Navbar/Search';

const Navbar = () => {

    const searchRoute = useMatch('/search')
    return (
        <div className='h-[3.75rem] px-8 z-20 sticky top-0  flex items-center justify-between'>
            <Navigation />
            {searchRoute && <Search />}
            <User />

        </div>
    );
};

export default Navbar;