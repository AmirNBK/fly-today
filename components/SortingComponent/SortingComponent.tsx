'use client';
import React, { useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Sort } from '@/types/types';
import localFont from 'next/font/local'
const IranSans = localFont({ src: '../../assets/fonts/IRANSansXFaNum-Regular.ttf' })

const SortingComponent = () => {
    const sorts: Sort[] = [
        { name: 'قیمت', code: 'Price' },
        { name: 'زمان', code: 'Time' },
    ];

    const [selectedSort, setSelectedSort] = useState<Sort>(sorts[0]);

    return (
        <div className='flex flex-row gap-2 items-center w-1/3'>
            <Dropdown value={selectedSort} onChange={(e: DropdownChangeEvent) => setSelectedSort(e.value)}
                options={sorts} optionLabel="name" className={`${IranSans.className} w-full md:w-14rem rtl h-10 flex flex-row items-center`} />
            <p className=' w-full text-[#8d8d8d] text-sm'>
                مرتب سازی
            </p>
        </div>
    );
};

export default SortingComponent;
