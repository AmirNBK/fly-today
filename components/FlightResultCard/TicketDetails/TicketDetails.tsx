import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import React from 'react';

interface TicketDetailsProps {
    price: number;          
    currency: string;     
}

const TicketDetails: React.FC<TicketDetailsProps> = ({price, currency }) => {
    return (
        <div className='TicketDetails flex flex-col items-center w-full gap-4'>
            <p className='text-[#8d8d8d] text-sm'>
                یک نفر
            </p>

            <div className='flex flex-row gap-2 items-center rtl'>
                <p className='text-[#1773dc] font-bold text-xl'>
                    {price.toLocaleString()}
                </p>
                <p className='text-[#8d8d8d] text-sm'>
                    {currency}
                </p>
            </div>

            <PrimaryButton label='انتخاب بلیط' />
        </div>
    );
};

export default TicketDetails;