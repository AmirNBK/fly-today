'use client';
import React from 'react';
import SingleFilter from '../SingleFilter/SingleFilter';

const FlightFilters = ({filters} : {filters : any}) => {
    const filterOptions = [
        { label: 'فرودگاه بین المللی امام خمینی', value: 'ika' },
    ];

    const filterOptions2 = [
        { label: 'فرودگاه صبیحا گوکچن', value: 'saw' },
        { label: 'فرودگاه استانبول', value: 'ist' },
    ];

    const checkedLuggageOptions = Object.values(filters.baggage[0].items).map((item) => ({
        label: item.baggageName,
        value: item.baggageName,
    }));
    

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

            <SingleFilter filterName='فرودگاه های مبدا' urlName='DepartureAirport' options={filterOptions} isCheckboxFilter />

            <SingleFilter filterName='فرودگاه های مقصد' urlName='ArrivalAirport' options={filterOptions2} isCheckboxFilter />

            <SingleFilter filterName='ميزان بار پرواز' urlName={filters.baggage[0].filterName} options={checkedLuggageOptions} isCheckboxFilter />

        </div>
    );
};

export default FlightFilters;