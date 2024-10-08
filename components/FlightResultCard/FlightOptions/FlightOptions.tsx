'use client';
import React from 'react';
import Image from 'next/image';
import arrow from '@/assets/icons/arrow.svg';
import { useAppContext } from '@/context/AppContext';
import { flightOptionsProps } from '@/types/types';

const FlightOptions: React.FC<flightOptionsProps & { flightId: string | number }> = ({
    isCharter,
    classType,
    availableSeats,
    flightNumber,
    provider,
    flightId,
}) => {
    const { toggleExtraDetails, extraDetailsToggle } = useAppContext();
    return (
        <div className='flex flex-row-reverse w-full justify-between items-center sm:border-t sm:border-y-0 border-y border-[#eeeeee]'>
            <div className='flex flex-row-reverse sm:gap-4 items-center sm:text-sm text-xs sm:px-6 px-2 py-2 sm:w-fit w-full justify-between'>
                
                <p className='text-[#464646] bg-[#f4f4f4] py-1 px-5'>
                    {isCharter ? 'چارتر' : 'سیستمی'}
                </p>

                <p className='text-[#464646]'>
                    {classType}
                </p>

                <p className='text-[#464646]'>
                    {availableSeats} صندلی خالی
                </p>

                <p className='text-[#464646] rtl'>
                    ‏شماره پرواز : {flightNumber}
                </p>

                <p className='text-[#464646] sm:block hidden'>
                    تامین‌کننده: {provider}
                </p>
            </div>

            <div className='px-16 sm:flex hidden flex-row-reverse items-center gap-2 cursor-pointer'>
                <p className='text-[#ff7913]' onClick={() => toggleExtraDetails(flightId)}>
                    جزئیات بیشتر
                </p>
                <Image src={arrow} alt='arrowIcon' className={ `${extraDetailsToggle[flightId] ? 'rotate-180 transition duration-500' : 'rotate-0 transition duration-500'}`} />
            </div>
        </div>
    );
};

export default FlightOptions;