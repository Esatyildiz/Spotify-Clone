import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '../Icon';
import logo from "../img/logo.svg";
import ApplicationInstall from './Sidebar/ApplicationInstall';
import Menu from './Sidebar/Menu';
import PlayList from './Sidebar/PlayList';
import SidebarCover from './Sidebar/SidebarCover';

const Sidebar = () => {
    const sidebar = useSelector(state => state.player.sidebar)
    return (
        <aside className='w-60 pt-6 flex flex-col flex-shrink-0 bg-black'>
            <a href='/' className='px-6 mb-[18px]'>
                <img src={logo} alt='' className='h-10' />
            </a>
            <Menu />

            <nav className='mt-6'>
                <ul>
                    <li>
                        <a href='#' className='flex items-center opacity-70 text-sm text-link font-bold py-2 px-6 gap-x-4 duration-200 hover:opacity-100 text-white'>
                            <span className='w-6 h-6 rounded-sm flex items-center justify-center text-black bg-white'>
                                <Icon name="plus" size={12} />
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href='#' className='flex items-center opacity-70 text-sm text-link font-bold py-2 px-6 gap-x-4 duration-200 hover:opacity-100 text-white'>
                            <span className='w-6 h-6 rounded-sm flex items-center justify-center text-white bg-heart-gradient'>
                                <Icon name="heart" size={12} />
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>

            <PlayList />
            <ApplicationInstall />
            {sidebar && <SidebarCover />}
        </aside>
    );
};

export default Sidebar;