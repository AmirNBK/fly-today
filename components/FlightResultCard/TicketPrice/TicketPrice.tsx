import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import React from 'react';

interface TicketPriceProps {
    price: number;
    currency: string;
}

const TicketPrice: React.FC<TicketPriceProps> = ({ price, currency }) => {
    return (
        <div className='TicketPrice flex sm:flex-col flex-row-reverse items-center w-full gap-4 sm:mt-0 mt-3'>
            <div className='flex flex-col sm:items-center items-end mt-3 sm:mt-0 sm:gap-4'>
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
            </div>

            <div className='sm:block hidden w-full'>
            <PrimaryButton label='انتخاب بلیط' />
            </div>

            <div className='sm:hidden block w-full'>
            <PrimaryButton label='جزئیات و انتخاب' />

            </div>
        </div>
    );
};

export default TicketPrice;