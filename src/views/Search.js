import React from 'react';
import categories from '../../src/data/categories.json';
import favoritesCategories from '../data/favorites-categories';
import Title from '../components/Title';
import ScrollContainer from 'react-indiana-drag-scroll';




function Category({ category }) {
    return (
        <div style={{ 'background': category.color }}
            className="rounded-md before:pt-[100%] before:block relative overflow-hidden"
        >
            <div className='absolute inset-0'>
                <h3 className='p-4 text-2xl tracking-tighter font-bold'>
                    {category.title}
                </h3>
                <img src={category.cover} className="w-[100px] h-[100px] absolute bottom-0 right-0 rotate-[25deg] translate-y-[-2%] translate-x-[18%] shadow-spotify" alt='' />
            </div>
        </div>
    )
}

function WideCategory({ category }) {
    return (
        <div style={{ 'background': category.color }}
            className="rounded-lg  relative overflow-hidden w-[438px] h-[220px] flex-shrink-0"
        >
            <div className='absolute inset-0'>
                <h3 className='p-4 text-[40px] tracking-tighter font-bold'>
                    {category.title}
                </h3>
                <img src={category.cover} className="w-32 h-32 absolute bottom-0 right-0 rotate-[25deg] translate-y-[-2%] translate-x-[18%] shadow-spotify" alt='' />
            </div>
        </div>
    )
}



const Search = () => {

    return (
        <>
            <section className='mb-4'>
                <Title title="En çok dinlediğin türler" />
                <ScrollContainer className="flex overflow-x gap-x-6 scrollable">
                    {favoritesCategories.map((category, index) => <WideCategory key={index} category={category} />)}
                </ScrollContainer>
            </section>

            <section>
                <Title title="Hepsine göz at" />
                <div className='grid grid-cols-6 gap-6'>
                    {categories.map((category, index) => <Category key={index} category={category} />)}
                </div>
            </section>

        </>
    );

};

export default Search;