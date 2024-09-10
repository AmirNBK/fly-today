'use client';
import React, { useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Sort } from '@/types/types';
import localFont from 'next/font/local';
import { useRouter, useSearchParams } from 'next/navigation';

const IranSans = localFont({ src: '../../assets/fonts/IRANSansXFaNum-Regular.ttf' });

const SortingComponent = () => {
    const sorts: Sort[] = [
        { name: 'زمان (زودترین)', code: 'EarliestTime' },
        { name: 'زمان (دیرترین)', code: 'LatestTime' },
        { name: 'قیمت (گران ترین)', code: 'HighestPrice' },
        { name: 'قیمت (ارزان ترین)', code: 'LowestPrice' },
    ];

    const [selectedSort, setSelectedSort] = useState<Sort>(sorts[0]);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSortChange = (e: DropdownChangeEvent) => {
        const newSort = e.value as Sort;
        setSelectedSort(newSort);

        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('sort', newSort.code);  
        const newUrl = `${window.location.pathname}?${currentParams.toString()}`;

        router.push(newUrl);
    };

    return (
        <div className='flex flex-row gap-2 items-center w-1/3'>
            <Dropdown
                value={selectedSort}
                onChange={handleSortChange}
                options={sorts}
                optionLabel="name"
                className={`${IranSans.className} w-full md:w-14rem rtl h-10 flex flex-row items-center`}
            />
            <p className=' w-full text-[#8d8d8d] text-sm'>
                مرتب سازی
            </p>
        </div>
    );
};

export default SortingComponent;
