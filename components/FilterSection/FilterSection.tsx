// components/FilterSection.tsx
'use client';
import React from 'react';
import SingleFilter from '../SingleFilter/SingleFilter';

interface FilterOption {
    label: string;
    value: string;
}

interface FilterSectionProps {
    filters: any;
}

const FilterSection = ({ filters }: FilterSectionProps) => {
    const filterOptions = [
        { label: 'فرودگاه بین المللی امام خمینی', value: 'ika' },
    ];

    const filterOptions2 = [
        { label: 'فرودگاه صبیحا گوکچن', value: 'saw' },
        { label: 'فرودگاه استانبول', value: 'ist' },
    ];

    const checkedLuggageOptions = Object.values(filters.baggage[0].items).map(
        (item: any) => ({
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
