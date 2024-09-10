import { FlightRouteProps } from '@/types/types';
import React from 'react';

const FlightRoute: React.FC<FlightRouteProps> = ({ originCity, destinationCity, startTime, endTime, estimatedTime }) => {
    console.log(typeof startTime);

    return (
        <div className="flight-route flex justify-between items-center w-full my-4 relative">
            <div className="destination flex flex-col items-center rtl gap-1">
                <p className="time font-semibold text-xl">{endTime.formattedTime}</p>
                <p className="city text-sm text-gray-600">{destinationCity}</p>
            </div>
            <div className="line-wrapper flex flex-col items-center flex-1 mx-4 rtl">
                <p className="estimated-time text-gray-500 text-xs mb-2">
                    {estimatedTime}
                </p>

                <div className="flex items-center w-full">
                    <div className="circle-start border border-[#1773dc] w-4 h-4 rounded-full"></div>

                    <div className="line flex-1 h-px bg-gray-400"></div>

                    <div className="circle-end border border-[#ff7913] w-4 h-4 rounded-full"></div>
                </div>
            </div>
            <div className="origin flex flex-col items-center rtl gap-1">
                <p className="time font-semibold text-xl">{startTime.formattedTime}</p>
                <p className="city text-sm text-gray-600">{originCity}</p>
            </div>
        </div>
    );
};

export default FlightRoute;
