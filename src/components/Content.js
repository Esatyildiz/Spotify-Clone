import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Search from '../views/Search';
import Collaction from '../views/Collaction';

const Content = () => {
    return (
        <main className='flex-auto  overflow-auto'>
            <Navbar />
            <div className='pt-5 px-8'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/search' element={<Search />}></Route>
                    <Route path='/collaction' element={<Collaction />}></Route>
                </Routes>
            </div>
        </main>
    );
};

export default Content;