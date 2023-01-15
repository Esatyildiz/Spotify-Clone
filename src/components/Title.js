import React from 'react';
import { NavLink } from 'react-router-dom';

const Title = ({ title, more = false }) => {
    return (
        <header className='flex items-center justify-between mb-4'>
            <h3 className='text-2xl font-bold text-white tracking-tight cursor-pointer hover:underline'>{title}</h3>
            {more && (
                <NavLink to={more ?? '#'} className="text-xs font-semibold text-link tracking-wider hover:underline">
                    TÜMÜNÜ GÖSTER
                </NavLink>
            )}
        </header>
    );
};

export default Title;