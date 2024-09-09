'use client';
import React, { useState } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';


const PaginatorComponent = () => {
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className='PaginatorComponent w-full'>
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange}
                className=' bg-transparent w-full'
            />
        </div>
    );
};

export default PaginatorComponent;