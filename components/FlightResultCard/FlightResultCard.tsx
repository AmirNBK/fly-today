import Image from 'next/image';
import React from 'react';
import flightIcon from '@/assets/icons/flightIcon.png';
import FlightRoute from './FlightRoute/FlightRoute';
import TicketDetails from './TicketDetails/TicketDetails';
import { FlightResultCardProps } from '@/types/types';
import FlightOptions from './FlightOptions/FlightOptions';
import FlightExtraDetails from './FlightExtraDetails/FlightExtraDetails';

const FlightResultCard: React.FC<FlightResultCardProps> = ({
    airlineName,
    flightRouteProps,
    ticketDetailsProps,
    flightOptionsProps,
    flightId, 
    flightData
}) => {
    return (
        <div className="FlightResultCard flex flex-col bg-white w-full justify-between rounded-sm">
            <div className="flex flex-row-reverse gap-12 items-center">
                <div className="flex flex-row items-center gap-3 justify-end flex-[0.8] p-8">
                    <p className="text-sm whitespace-nowrap">{airlineName}</p>
                    <Image src={flightIcon} alt="icon" />
                </div>

                <div className="flex-[3] p-8">
                    <FlightRoute {...flightRouteProps} />
                </div>

                <div className="flex-[1.5] border-r border-[#eeeeee] p-8">
                    <TicketDetails {...ticketDetailsProps} />
                </div>
            </div>

            <div className='FlightResultCardFooter'>
            <FlightOptions {...flightOptionsProps} flightId={flightId} />

            <FlightExtraDetails flightId={flightId} airlineName={airlineName} flightRouteProps={flightRouteProps} flightData={flightData} 
            isCharter={flightOptionsProps.isCharter} classType={flightOptionsProps.classType}
            />
        </div>
        </div>
    );
};

export default FlightResultCard;