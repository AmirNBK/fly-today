'use client'
    ; import { useState } from 'react';
import Image from 'next/image';
import sorting from '@/assets/icons/sorting.svg';
import filter from '@/assets/icons/filter.svg';
import MobileSortingSidebar from './MobileSortingSidebar/MobileSortingSidebar';
import { SortOption } from '@/utils/sortFlightsUtils';

const MobileSortFilterActions = ({ selectedSortingOption }: { selectedSortingOption: SortOption }) => {
    const [isSortingSidebarOpen, setSortingSidebarOpen] = useState(false);

    return (
        <>
            <div className='flex flex-row w-full mb-6 gap-4'>
                <button
                    className='flex flex-row-reverse w-1/2 items-center gap-2 bg-white p-2 justify-center rounded-sm'
                    onClick={() => setSortingSidebarOpen(true)}
                >
                    <Image src={sorting} alt='sorting' />
                    <p>مرتب‌ سازی</p>
                </button>

                <button className='flex flex-row-reverse w-1/2 items-center gap-2 bg-white p-2 justify-center rounded-sm'>
                    <Image src={filter} alt='filter' />
                    <p>فیلتر کردن</p>
                </button>
            </div>

            {isSortingSidebarOpen && (
                <MobileSortingSidebar
                    selectedSortingOption={selectedSortingOption}
                    closeSidebar={() => setSortingSidebarOpen(false)}
                />
            )}
        </>
    );
};

export default MobileSortFilterActions;
