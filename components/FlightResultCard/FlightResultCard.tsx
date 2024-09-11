import Image from 'next/image';
import React from 'react';
import flightIcon from '@/assets/icons/flightIcon.png';
import FlightRoute from './FlightRoute/FlightRoute';
import { FlightResultCardProps } from '@/types/types';
import FlightOptions from './FlightOptions/FlightOptions';
import FlightExtraDetails from './FlightExtraDetails/FlightExtraDetails';
import TicketPrice from './TicketPrice/TicketPrice';

const FlightResultCard: React.FC<FlightResultCardProps> = ({
    airlineName,
    flightRouteProps,
    ticketDetailsProps,
    flightOptionsProps,
    flightId,
    pricingBreakdownPerPassenger,
    priceFare,
    isRefundable,
    airplaneModel,
    allowedBaggage,
    fareClass
}) => {

    return (
        <>
            <div className="FlightResultCard sm:flex hidden flex-col bg-white w-full justify-between rounded-sm">
                <div className="flex flex-row-reverse gap-12 items-center">
                    <div className="flex flex-row items-center gap-3 justify-end flex-[0.8] p-8">
                        <p className="text-sm whitespace-nowrap">{airlineName}</p>
                        <Image src={flightIcon} alt="icon" />
                    </div>

                    <div className="flex-[3] p-8">
                        <FlightRoute {...flightRouteProps} />
                    </div>

                    <div className="flex-[1.5] border-r border-[#eeeeee] p-8">
                        <TicketPrice {...ticketDetailsProps} />
                    </div>
                </div>

                <div className='FlightResultCardFooter'>
                    <FlightOptions {...flightOptionsProps} flightId={flightId} />

                    <FlightExtraDetails flightId={flightId} airlineName={airlineName} flightRouteProps={flightRouteProps}
                        isCharter={flightOptionsProps.isCharter} classType={flightOptionsProps.classType}
                        priceFare={priceFare}
                        pricingBreakdownPerPassenger={pricingBreakdownPerPassenger}
                        isRefundable={isRefundable}
                        airplaneModel={airplaneModel}
                        allowedBaggage={allowedBaggage}
                        fareClass={fareClass}
                    />
                </div>
            </div>


            <div className='sm:hidden flex flex-col bg-white w-full rounded-sm p-2'>
            <div className="flex flex-row items-center gap-3 justify-end ">
                        <p className="text-sm whitespace-nowrap">{airlineName}</p>
                        <Image src={flightIcon} alt="icon" className=' w-10 h-10' />
                    </div>
                    <div className="">
                        <FlightRoute {...flightRouteProps} />
                    </div>

                    <div>
                    <FlightOptions {...flightOptionsProps} flightId={flightId} />
                    </div>

                    <div>
                    <TicketPrice
                        price={ticketDetailsProps.price}
                        currency={ticketDetailsProps.currency}
                        flightId={flightId}
                        airlineName={airlineName}
                        flightRouteProps={flightRouteProps}
                        flightOptionsProps={flightOptionsProps}
                        pricingBreakdownPerPassenger={pricingBreakdownPerPassenger}
                        isRefundable={isRefundable}
                        airplaneModel={airplaneModel}
                        allowedBaggage={allowedBaggage}
                        fareClass={fareClass}
                    />
                    </div>
                    
            </div>

        </>
    );
};

export default FlightResultCard;