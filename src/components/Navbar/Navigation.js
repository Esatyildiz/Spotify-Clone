import React from 'react';
import { Icon } from '../../Icon';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigation = useNavigate()

    return (
        <nav className='flex items-center gap-x-4'>
            <button title='Back' onClick={() => navigation(-1)} type='button' className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
                <Icon name="prev" size={22} />
            </button>
            <button onClick={() => navigation(1)} type='button' className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
                <Icon name="next" size={22} />
            </button>
        </nav>
    );
};

export default Navigation;