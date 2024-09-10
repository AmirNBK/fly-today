import Image from 'next/image';
import React from 'react';
import flightIcon from '@/assets/icons/flightIcon.png'; // Adjust the path to your icon

interface FlightDetailedInfoProps {
    airlineName: string;
    originCity: string;
    destinationCity: string;
    startTime: string;
    endTime: string;
    startDate: string;
    endDate: string;
    originAirport: string;
    destinationAirport: string;
    flightDuration: string;
    flightType: string;
    isRefundable: string;
    airplaneModel: string;
    allowedBaggage: string;
    flightClass: string;
    fareClass: string;
}

const FlightDetailedInfo: React.FC<FlightDetailedInfoProps> = ({
    airlineName,
    originCity,
    destinationCity,
    startTime,
    endTime,
    startDate,
    endDate,
    originAirport,
    destinationAirport,
    flightDuration,
    flightType,
    isRefundable,
    airplaneModel,
    allowedBaggage,
    flightClass,
    fareClass,
}) => {
    return (
        <div className='flex flex-row mt-8 items-start'>
            <div className='flex flex-col items-center gap-3 justify-end flex-[0.8] p-8'>
                <Image src={flightIcon} alt='icon' />
                <p className='text-sm'>{airlineName}</p>
            </div>

            <div className='flex flex-col items-start'>
                {/* Origin Info */}
                <div className='flex flex-row items-center gap-4'>
                    <div className='circle-start border border-[#870b1d] translate-x-0.5 w-2 h-2 rounded-full'></div>
                    <div className='flex flex-row gap-4 border-l pl-3 border-[#eeeeee]'>
                        <p className='font-bold'>{startTime}</p>
                        <p>{originCity}</p>
                    </div>
                    <div className='flex flex-row gap-4 border-l pl-3 border-[#eeeeee]'>
                        <p>{startDate}</p>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <p className='text-[#8d8d8d]'>{originAirport}</p>
                    </div>
                </div>

                {/* Flight Details */}
                <div className="grid grid-cols-3 gap-4 text-sm border-r-4 border-dotted border-[#C6C6C6] pr-6 py-12">
                    <div className="col-span-1 flex flex-row gap-3">
                        <p className='text-[#8d8d8d]'>مدت پرواز</p>
                        <p>{flightDuration}</p>
                    </div>
                    <div className="col-span-1 flex flex-row gap-3">
                        <p className='text-[#8d8d8d]'>نوع پرواز</p>
                        <p>{flightType}</p>
                    </div>
                    <div className="col-span-1 flex flex-row gap-3">
                        <p className='text-[#8d8d8d]'>استرداد</p>
                        <p className={`${isRefundable === 'Offline' ? 'text-[#ff1d23]' : 'text-[#4caf50]'}`}>{isRefundable === 'Offline' ? 'غیر قابل استرداد' : 'قابل استرداد'}</p>
                    </div>
                    <div className="col-span-1 flex flex-row gap-3">
                        <p className='text-[#8d8d8d]'>نوع هواپیما</p>
                        <p>{airplaneModel}</p>
                    </div>
                    <div className="col-span-1 flex flex-row gap-3">
                        <p className='text-[#8d8d8d]'>بار مجاز</p>
                        <p>{allowedBaggage}</p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-1 flex flex-row gap-3">
                        <p className='text-[#8d8d8d]'>کلاس پرواز</p>
                        <p>{flightClass}</p>
                    </div>
                    <div className="col-span-1 flex flex-row gap-3">
                        <p className='text-[#8d8d8d]'>کلاس نرخی</p>
                        <p>{fareClass}</p>
                    </div>
                    <div className="col-span-1"></div>
                </div>

                {/* Destination Info */}
                <div className='flex flex-row items-center gap-4'>
                    <div className="circle-start border border-[#870b1d] translate-x-0.5 w-2 h-2 rounded-full"></div>
                    <div className='flex flex-row gap-4 border-l pl-3 border-[#eeeeee]'>
                        <p className='font-bold'>{endTime}</p>
                        <p>{destinationCity}</p>
                    </div>
                    <div className='flex flex-row gap-4 border-l pl-3 border-[#eeeeee]'>
                        <p>{endDate}</p>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <p className='text-[#8d8d8d]'>{destinationAirport}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetailedInfo;
