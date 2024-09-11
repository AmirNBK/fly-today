'use client';
import React from 'react';
import SingleFilter from '../SingleFilter/SingleFilter';
import { BaggageItem, FilterOption, Filters } from '@/types/types';

interface FilterSectionProps {
    filters: Filters;
}

const FilterSection = ({ filters }: FilterSectionProps) => {
    const filterOptions: FilterOption[] = [
        { label: 'فرودگاه بین المللی امام خمینی', value: 'ika' },
    ];

    const filterOptions2: FilterOption[] = [
        { label: 'فرودگاه صبیحا گوکچن', value: 'saw' },
        { label: 'فرودگاه استانبول', value: 'ist' },
    ];

    // Generate checked luggage options from filters
    const checkedLuggageOptions: FilterOption[] = Object.values(filters.baggage[0].items).map(
        (item: BaggageItem) => ({
            label: item.baggageName,
            value: item.baggageName,
        })
    );

    return (
        <>
            <SingleFilter
                filterName='فرودگاه های مبدا'
                urlName='DepartureAirport'
                options={filterOptions}
                isCheckboxFilter
            />

            <SingleFilter
                filterName='فرودگاه های مقصد'
                urlName='ArrivalAirport'
                options={filterOptions2}
                isCheckboxFilter
            />

            <SingleFilter
                filterName='میزان بار پرواز'
                urlName={filters.baggage[0].filterName}
                options={checkedLuggageOptions}
                isCheckboxFilter
            />
        </>
    );
};

export default FilterSection;
