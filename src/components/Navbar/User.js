import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Icon } from '../../Icon';

const User = () => {
    const usernew = {
        name: 'Esat Yıldız',
        avatar: 'https://i.scdn.co/image/ab6775700000ee8577c6d131a6284eb069f28c5d'
    }
    return (
        <Menu as="nav" className="relative">
            {({ open }) => (
                <>
                    <Menu.Button className={`h-8 flex items-center rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} duration-200 hover:bg-active`}>
                        <img src={usernew.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"} alt="" />
                        <span className='text-sm font-semibold mr-2'>{usernew.name}</span>
                        <span className={open && 'rotate-180'}>
                            <Icon name="down" size={16} />
                        </span>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute top-full z-20 right-0 w-48 p-1 bg-active rounded translate-y-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={`h-10 flex items-center justify-between px-2 text-sm  ${active && 'bg-white bg-opacity-20 rounded'}`}>
                                        Hesap
                                        <Icon name={"accesibility"} size={"16"} />
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={`h-10 flex items-center px-2 text-sm  ${active && 'bg-white bg-opacity-20 rounded'}`}>
                                        Profil
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={`h-10 flex items-center px-2 text-sm  border-b border-[#ffffff1a] ${active && 'bg-white bg-opacity-20 rounded'}`}>
                                        Ayarlar
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={`h-10 flex items-center px-2 text-sm  ${active && 'bg-white bg-opacity-20 rounded'}`}>
                                        Oturumu kapat
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

export default User;