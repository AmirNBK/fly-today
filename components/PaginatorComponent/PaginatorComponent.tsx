'use client';
import React, { useState } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { FlightData } from '@/types/types';
import { useRouter } from 'next/navigation';

const PaginatorComponent = ({ data }: { data: FlightData }) => {

    const router = useRouter();
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(7);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        const newPage = (event.first / event.rows) + 1;
        setFirst(event.first);
        setRows(event.rows);
        router.push(`/flight/search?page=${newPage}`);
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
