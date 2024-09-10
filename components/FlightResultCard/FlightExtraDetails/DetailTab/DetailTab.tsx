import React from 'react';
import localFont from 'next/font/local';
import FlightDetailedInfo from './FlightDetailedInfo/FlightDetailedInfo';
import PassengersCostInfo from './PassengersCostInfo/PassengersCostInfo';
import { DetailTabProps, FlightRouteProps, PtcFareBreakdown } from '@/types/types';

const IranSans = localFont({ src: '../../../../assets/fonts/IRANSansXFaNum-Regular.ttf' });

const DetailTab: React.FC<DetailTabProps> = ({
    airlineName,
    originCity,
    originCityAirportName,
    destinationCity,
    destinationCityAirportName,
    startTime,
    endTime,
    estimatedTime,
    isCharter,
    classType,
    pricingBreakdownPerPassenger,
    priceFare,
    isRefundable,
    airplaneModel,
    allowedBaggage,
    fareClass,
}) => {

    // Maps over each passenger and generates a cost for each
    const costItems = pricingBreakdownPerPassenger.map(item => {
        const label = item.passengerTypeQuantity.passengerType === 'Adt' ? 'بزرگسال' :
            item.passengerTypeQuantity.passengerType === 'Chd' ? 'کودک' :
                'نوزاد';
        const amount = `${item.passengerFare.totalFare.toLocaleString()} تومان`;
        return { label: `x ${item.passengerTypeQuantity.quantity} ${label}`, amount };
    });

    costItems.push({
        label: 'مجموع :',
        amount: `${priceFare.toLocaleString()} تومان`,
        isBold: true,
        isHighlight: true
    });


    return (
        <div className={`${IranSans.className} DetailTab flex flex-col items-start mt-3`}>
            <h1 className='font-bold text-lg'>
                پرواز رفت {originCity} - {destinationCity}
            </h1>

            <FlightDetailedInfo
                airlineName={airlineName}
                originCity={originCity}
                destinationCity={destinationCity}
                startTime={startTime}
                endTime={endTime}
                startDate={`${startTime.persianDate} (${startTime.day} ${startTime.monthName})`}
                endDate={`${endTime.persianDate} (${endTime.day} ${endTime.monthName})`}
                originAirport={originCityAirportName}
                destinationAirport={destinationCityAirportName}
                flightDuration={estimatedTime}
                flightType={isCharter ? 'چارتر' : 'سیستمی'}
                isRefundable={isRefundable}
                airplaneModel={airplaneModel}
                allowedBaggage={allowedBaggage}
                flightClass={classType}
                fareClass={fareClass}
            />

            <PassengersCostInfo costItems={costItems} />
        </div>
    );
};

export default DetailTab;
