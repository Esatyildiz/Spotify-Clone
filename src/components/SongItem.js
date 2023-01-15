import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon';
import { setCurrent } from '../app/player';


const SongItem = ({ item }) => {
    const dispatch = useDispatch()
    const { current, playing, controls } = useSelector(state => state.player)

    const imageStyle = item => {
        switch (item.type) {
            case "artist": return "rounded-full";
            default:
        }
    }

    const isCurrentItem = (current?.id === item.id && playing)
    console.log(isCurrentItem)

    const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing) {
                controls.pause()
            } else {
                controls.play()
            }
        }
        else {
            dispatch(setCurrent(item))
        }
    }


    return (
        <NavLink
            key={item.id}
            to={"/"}
            className="bg-footer p-4 rounded flex flex-col duration-[.3s] hover:bg-active group"
        >
            <div className='mb-4 relative'>
                <img src={item.image} className={`object-cover w-44 h-44 ${imageStyle(item)}`} alt="" />
                <button className={`w-12 h-12 absolute bottom-2 right-2 rounded-full text-black shadow-Play-btn-shadow bg-primary flex items-center justify-center duration-[.3s] opacity-0 translate-y-2  group-hover:opacity-100 group-hover:translate-y-0 hover:scale-[1.04] ${!isCurrentItem ? '' : ''}`}
                    onClick={updateCurrent}
                >
                    <Icon name={isCurrentItem ? 'pause' : 'play'} />
                </button>
            </div>
            <span className='text-base font-bold pb-1 line-clamp-1'>{item.title}</span>
            <span className='font-normal text-sm text-link line-clamp-2'>{item.description}</span>
        </NavLink>
    );
};

export default SongItem;