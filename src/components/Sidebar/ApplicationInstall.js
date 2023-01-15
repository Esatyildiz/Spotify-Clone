import React from 'react';
import { Icon } from '../../Icon';

const ApplicationInstall = () => {
    return (
        <button type='button' className='px-6 h-10 flex flex-shrink-0 items-center text-sm text-link cursor-pointer font-semibold duration-200 hover:text-white  gap-x-4'>
            <Icon name="install" size={20} />
            Uygulama Yükle
        </button>

    );
};

export default ApplicationInstall;