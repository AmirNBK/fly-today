import React from 'react';

interface FlightRouteProps {
    originCity: string;
    destinationCity: string;
    startTime: string;
    endTime: string;
    estimatedTime: string;
}

const FlightRoute: React.FC<FlightRouteProps> = ({ originCity, destinationCity, startTime, endTime, estimatedTime }) => {
    return (
        <div className="flight-route flex justify-between items-center w-full my-4 relative">
            <div className="destination flex flex-col items-center rtl gap-1">
                <p className="time font-semibold text-xl">{endTime}</p>
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
                <p className="time font-semibold text-xl">{startTime}</p>
                <p className="city text-sm text-gray-600">{originCity}</p>
            </div>
        </div>
    );
};

export default FlightRoute;
