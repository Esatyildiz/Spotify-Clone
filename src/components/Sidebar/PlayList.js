import React from 'react';

const PlayList = () => {
    const list = (new Array(45)).fill("x");


    return (
        <nav className='mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-10'>
            <ul>
                {list.map((i, k) => (
                    <li key={k}>
                        <a href='#!' className='text-s font-normal text-link duration-200 hover:text-white flex h-8 items-center'>
                            22. çalma listem
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PlayList;