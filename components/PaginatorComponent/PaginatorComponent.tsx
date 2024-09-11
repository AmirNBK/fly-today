'use client';
import React, { useState, useEffect } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useRouter } from 'next/navigation';
import { PricedItinerary } from '@/types/types';

const PaginatorComponent = ({ data, currentPage }: { data: PricedItinerary[], currentPage: number }) => {
    const router = useRouter();
    // State for tracking the starting index of the current page
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(7);

    // Update the starting index based on the current page
    useEffect(() => {
        setFirst((currentPage - 1) * rows);
    }, [currentPage, rows]);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        const newPage = (event.first / event.rows) + 1;
        setFirst(event.first);
        setRows(event.rows);

        const params = new URLSearchParams(window.location.search);

        params.set('page', newPage.toString());

        router.push(`/flight/search?${params.toString()}`);
    };

    return (
        <div className='PaginatorComponent w-full block '>
            <Paginator
                first={first}
                rows={rows}
                totalRecords={data.length}
                rowsPerPageOptions={[7, 14, 21]}
                onPageChange={onPageChange}
                className='bg-transparent w-full'
            />
        </div>
    );
};

export default PaginatorComponent;