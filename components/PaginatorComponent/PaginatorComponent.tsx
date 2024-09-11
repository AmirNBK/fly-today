'use client';
import React, { useState, useEffect } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useRouter } from 'next/navigation';
import { PricedItinerary, totalData } from '@/types/types';

const PaginatorComponent = ({ data, currentPage }: { data: PricedItinerary[], currentPage: number }) => {
    const router = useRouter();
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(7);

    // Set the initial state based on the currentPage prop
    useEffect(() => {
        setFirst((currentPage - 1) * rows); // Calculate the offset for the paginator
    }, [currentPage, rows]);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        const newPage = (event.first / event.rows) + 1;
        setFirst(event.first);
        setRows(event.rows);

        // Create a new URLSearchParams instance to manipulate the query string
        const params = new URLSearchParams(window.location.search);

        // Update the page parameter
        params.set('page', newPage.toString());

        // Update the URL with the new query string
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