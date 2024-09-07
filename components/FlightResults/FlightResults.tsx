import React from 'react';
import SortingComponent from '../SortingComponent/SortingComponent';

const FlightResults = () => {

    return (
        <div className='FlightResults flex flex-col items-end w-full gap-1'>
            <h2 className=' font-bold text-[#464646] text-xl'>
                بلیط هواپیمای تهران به استانبول
            </h2>

            <div className='flex flex-row justify-between items-center w-full'>
                <SortingComponent/>
                <p className='rtl text-sm'>
                    27 پرواز یافت شد . سه‌شنبه، ۱۲ اردیبهشت ۱۴۰۰
                </p>
            </div>
        </div>
    );
};

export default FlightResults;