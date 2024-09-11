'use client';
import React from 'react';
import FilterSection from '../FilterSection/FilterSection';
import useResetFilters from '@/hooks/useResetFilters';
import { Filters } from '@/types/types';

const FlightFilters = ({ filters }: { filters: Filters }) => {
    const resetFilters = useResetFilters();
    
    return (
        <div className='FlightFilters bg-white w-full'>
            <div className='flex flex-row items-baseline justify-between p-4'>
                <p
                    className='text-sm text-[#1773dc] cursor-pointer'
                    onClick={resetFilters}
                >
                    حذف فیلترها
                </p>
                <p className='font-bold'>فیلترها</p>
            </div>

            <FilterSection filters={filters} />
        </div>
    );
};

export default FlightFilters;
