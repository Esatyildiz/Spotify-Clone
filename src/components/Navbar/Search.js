import React from 'react';
import { Icon } from '../../Icon';


const Search = () => {
    return (
        <div className='mr-auto ml-4 relative'>
            <label htmlFor='search-input' className='text-black cursor-pointer w-12 h-10 flex items-center justify-center absolute top-0 left-0'>
                <Icon name="search" />
            </label>
            <input id='search-input' type="text" className='h-10 bg-white rounded-full outline-none text-black w-[364px] py-[6px] px-12 text-sm placeholder:text-[#757575]' placeholder='Ne dinlemek istiyorsun?' />
        </div>
    );
};

export default Search;