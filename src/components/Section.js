
import React from 'react';
import SongItem from './SongItem';
import Title from './Title';

const Section = ({ title, more = false, items }) => {


    return (
        <section>
            <Title title={title} more={more} />
            <div className='grid grid-cols-6 gap-x-6 mb-4'>
                {items.map(item => (
                    <SongItem item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Section;