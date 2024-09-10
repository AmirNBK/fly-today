'use client';
import React, { useState } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useRouter, useSearchParams } from 'next/navigation';
import { totalData } from '@/types/types';

const PaginatorComponent = ({ data }: { data: totalData }) => {
    const router = useRouter();
    const searchParams = useSearchParams(); // Access the current query parameters
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(7);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        const newPage = (event.first / event.rows) + 1;
        setFirst(event.first);
        setRows(event.rows);

        // Create a new URLSearchParams instance to manipulate the query string
        const params = new URLSearchParams(searchParams.toString());

        // Update the page parameter
        params.set('page', newPage.toString());

        // Update the URL with the new query string
        router.push(`/flight/search?${params.toString()}`);
    };

    return (
        <div className='PaginatorComponent w-full'>
            <Paginator
                first={first}
                rows={rows}
                totalRecords={data.pricedItineraries.length}
                rowsPerPageOptions={[7, 14, 21]}
                onPageChange={onPageChange}
                className='bg-transparent w-full'
            />
        </div>
    );
};

export default PaginatorComponent;
