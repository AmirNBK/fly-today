import Image from 'next/image';
import React from 'react';
import flightIcon from '@/assets/icons/flightIcon.png'
import FlightRoute from './FlightRoute/FlightRoute';
import TicketDetails from './TicketDetails/TicketDetails';
import FlightOptions from './FlightOptions/FlightOptions';
import FlightExtraDetails from './FlightExtraDetails/FlightExtraDetails';

const FlightResultCard = () => {
    return (
        <div className='FlightResultCard flex flex-col bg-white w-full justify-between rounded-sm'>
            <div className='flex flex-row-reverse gap-12 items-center'>
                <div className='flex flex-row items-center gap-3 justify-end flex-[0.8] p-8'>
                    <p className='text-sm'>
                        ماهان
                    </p>
                    <Image src={flightIcon} alt='icon' />
                </div>

                <div className='flex-[3] p-8'>
                    <FlightRoute
                        originCity="تهران (THR)"
                        destinationCity="استانبول (IST)"
                        startTime="۱۲:۴۵"
                        endTime="۱۷:۳۰"
                        estimatedTime="3 ساعت و 45 دقیقه"
                    />
                </div>

                <div className='flex-[1.5] border-r border-[#eeeeee] p-8'>
                    <TicketDetails />
                </div>

            </div>


            <FlightOptions
                isCharter={true}
                classType="اکونومی"
                availableSeats={7}
                flightNumber="7856"
                provider="پرایس لاین"
            />

            <FlightExtraDetails />

        </div>
    );
};

export default FlightResultCard;