'use client';
import React from 'react';
import SingleFilter from '../SingleFilter/SingleFilter';

const FlightFilters = ({filters} : {filters : any}) => {
    const filterOptions = [
        { label: 'اکونومی', value: 'economy' },
        { label: 'بیزینس', value: 'business' },
        { label: 'فرست کلاس', value: 'first-class' }
    ];

    const filterOptions2 = [
        { label: 'فرودگاه صبیحا گوکچن', value: 'saw' },
        { label: 'فرودگاه استانبول', value: 'ist' },
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

            {/* <SingleFilter filterName='محدوده قیمت' options={filterOptions} isRangeFilter /> */}

            {/* <SingleFilter filterName='کلاس پروازی' options={filterOptions} isCheckboxFilter /> */}

            <SingleFilter filterName='فرودگاه های مقصد' urlName={'ArrivalAirport'} options={filterOptions2} isCheckboxFilter />

        </div>
    );
};

export default FlightFilters;