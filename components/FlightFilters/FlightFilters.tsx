'use client';
import React, { useState } from 'react';
import FilterSection from '../FilterSection/FilterSection';

const FlightFilters = ({ filters }: { filters: any }) => {
    const [currentFilters, setCurrentFilters] = useState(filters);

    const handleResetFilters = () => {
        setCurrentFilters(filters);
    };

    return (
        <div className='FlightFilters bg-white w-full'>
            <div className='flex flex-row items-baseline justify-between p-4'>
                <p
                    className='text-sm text-[#1773dc] cursor-pointer'
                    onClick={handleResetFilters}
                >
                    حذف فیلترها
                </p>
                <p className='font-bold'>فیلترها</p>
            </div>

            <FilterSection filters={currentFilters} />
        </div>
    );
};

export default FlightFilters;
