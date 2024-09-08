import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import React from 'react';

const TicketDetails = () => {
    return (
        <div className='TicketDetails flex flex-col items-center w-full gap-4'>
            <p className='text-[#8d8d8d] text-sm'>
                یک نفر
            </p>

            <div className='flex flex-row gap-2 items-center rtl'>
                <p className='text-[#1773dc] font-bold text-xl'>
                ۱,۳۷۰,۰۰۰
                </p>
                <p className='text-[#8d8d8d] text-sm'>
                    تومان
                </p>
            </div>

            <PrimaryButton label='انتخاب بلیط'/>
        </div>
    );
};

export default TicketDetails;