'use client';
import React from 'react';
import SingleFilter from '../SingleFilter/SingleFilter';

const FlightFilters = () => {
    const filterOptions = [
        { label: 'اکونومی', value: 'economy' },
        { label: 'بیزینس', value: 'business' },
        { label: 'فرست کلاس', value: 'first-class' }
    ];

    const filterOptions2 = [
        { label: 'پروازهای سیستمی', value: 'systematic' },
        { label: 'پروازهای چارتری', value: 'Chart' },
    ];

    return (
        <div className='FlightFilters bg-white w-full'>
            <div className='flex flex-row items-baseline justify-between p-4'>
                <p className='text-sm text-[#1773dc] cursor-pointer'>
                    حذف فیلترها
                </p>
                <p className=' font-bold'>
                    فیلترها
                </p>
            </div>


            <SingleFilter filterName='کلاس پروازی' options={filterOptions} />

            <SingleFilter filterName='نوع پرواز' options={filterOptions2} />

        </div>
    );
};

export default FlightFilters;