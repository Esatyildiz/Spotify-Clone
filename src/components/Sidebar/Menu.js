import React from 'react';
import { Icon } from '../../Icon';
import { NavLink } from "react-router-dom";


const Menu = () => {

    const IsActive = ({ isActive }) => { return "h-10 flex items-center text-sm font-semibold text-link  duration-200 rounded gap-x-4 hover:text-white px-4 " + (isActive ? "bg-active" : "text-white") }

    return (
        <nav className='px-2'>
            <ul className='flex flex-col'>
                <li>

                    <NavLink to={"/"} className={IsActive}>
                        <span>
                            <Icon name="home" />
                        </span>
                        Anasayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} className={IsActive}>
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collaction"} className={IsActive}>
                        <span>
                            <Icon name="book" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;