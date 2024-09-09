'use client';
import React from 'react';
import Image from 'next/image';
import arrow from '@/assets/icons/arrow.svg';
import { FlightOptionsProps } from '@/types/types';
import { useAppContext } from '@/context/AppContext';

const FlightOptions: React.FC<FlightOptionsProps & { flightId: string }> = ({
    isCharter,
    classType,
    availableSeats,
    flightNumber,
    provider,
    flightId,
}) => {
    const { toggleExtraDetails, extraDetailsToggle } = useAppContext();


    return (
        <div className='flex flex-row-reverse w-full justify-between items-center border-t border-[#eeeeee]'>
            <div className='flex flex-row-reverse gap-4 items-center text-sm px-6 py-2'>
                <p className='text-[#464646] bg-[#f4f4f4] py-1 px-5'>
                    {isCharter ? 'چارتر' : 'سیستمی'}
                </p>

                <p className='text-[#464646]'>
                    {classType}
                </p>

                <p className='text-[#464646]'>
                    {availableSeats} صندلی خالی
                </p>

                <p className='text-[#464646]'>
                    ‏شماره پرواز : {flightNumber}
                </p>

                <p className='text-[#464646]'>
                    تامین‌کننده: {provider}
                </p>
            </div>

            <div className='px-16 flex flex-row-reverse items-center gap-2 cursor-pointer'>
                <p className='text-[#ff7913]' onClick={() => toggleExtraDetails(flightId)}>
                    جزئیات بیشتر
                </p>
                <Image src={arrow} alt='arrowIcon' className={ `${extraDetailsToggle[flightId] ? 'rotate-180 transition duration-500' : 'rotate-0 transition duration-500'}`} />
            </div>
        </div>
    );
};

export default FlightOptions;