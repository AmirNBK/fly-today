// SortingComponent.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import localFont from 'next/font/local';
import { useRouter, useSearchParams } from 'next/navigation';
import { SortOption } from '@/utils/sortFlightsUtils';
import { getDefaultSort, updateSortInUrl, sorts } from '@/utils/sortUtils';
import { Sort } from '@/types/types';

const IranSans = localFont({ src: '../../assets/fonts/IRANSansXFaNum-Regular.ttf' });

const SortingComponent = ({ selectedSortingOption }: { selectedSortingOption: SortOption }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedSort, setSelectedSort] = useState<Sort | null>(null);

    useEffect(() => {
        setSelectedSort(getDefaultSort(selectedSortingOption));
    }, [selectedSortingOption]);

    const handleSortChange = (e: DropdownChangeEvent) => {
        const newSort = e.value as Sort;
        setSelectedSort(newSort);
        updateSortInUrl(newSort.code, searchParams, router); 
    };

    return (
        <div className='sm:flex hidden flex-row gap-2 items-center w-1/3'>
            <Dropdown
                value={selectedSort}
                onChange={handleSortChange}
                options={sorts}
                optionLabel="name"
                className={`${IranSans.className} w-full md:w-14rem rtl h-10 flex flex-row items-center`}
            />
            <p className='w-full text-[#8d8d8d] text-sm'>
                مرتب سازی
            </p>
        </div>
    );
};

export default SortingComponent;
