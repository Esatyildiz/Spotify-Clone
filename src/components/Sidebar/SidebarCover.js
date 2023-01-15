import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebar } from '../../app/player';
import { Icon } from '../../Icon';

const SidebarCover = () => {
    const current = useSelector(state => state.player.current)
    const dispatch = useDispatch()
    return (
        <div className='pt-[100%] relative group'>
            <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" alt="" />
            <button className='w-6 h-6 bg-black bg-opacity-80 rounded-full flex items-center justify-center absolute top-1 right-1 opacity-0 hover:scale-105 group-hover:opacity-100 '
                onClick={() => dispatch(setSidebar(false))}
            >
                <Icon size={16} name="arrowdown" />
            </button>
        </div>
    );
};

export default SidebarCover;