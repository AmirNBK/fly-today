import React from 'react';
import localFont from 'next/font/local';
import FlightDetailedInfo from './FlightDetailedInfo/FlightDetailedInfo';
import PassengersCostInfo from './PassengersCostInfo/PassengersCostInfo';
import { extractDateTimeInfo } from '@/commonFuncs/functions';

const IranSans = localFont({ src: '../../../../assets/fonts/IRANSansXFaNum-Regular.ttf' });

interface FlightRouteProps {
    originCity: string;
    destinationCity: string;
    startTime: string;
    endTime: string;
    estimatedTime: string;
}

interface DetailTabProps extends FlightRouteProps {
    airlineName: string;
    flightData: any
}

const DetailTab: React.FC<DetailTabProps> = ({
    airlineName,
    originCity,
    originCityAirportName,
    destinationCity,
    destinationCityAirportName,
    startTime,
    endTime,
    estimatedTime,
    flightData, 
    isCharter,
    classType

}) => {
    const costItems = flightData.airItineraryPricingInfo.ptcFareBreakdown.map(item => {
        const label = item.passengerTypeQuantity.passengerType === 'Adt' ? 'بزرگسال' : 
                      item.passengerTypeQuantity.passengerType === 'Chd' ? 'کودک' : 
                      'نوزاد';
        const amount = `${item.passengerFare.totalFare.toLocaleString()} تومان`;
        return { label: `x ${item.passengerTypeQuantity.quantity} ${label}`, amount };
      });
      
      costItems.push({
        label: 'مجموع :',
        amount: `${flightData.airItineraryPricingInfo.itinTotalFare.totalFare.toLocaleString()} تومان`,
        isBold: true,
        isHighlight: true
      });
      
    const startDate = extractDateTimeInfo(flightData.originDestinationOptions[0].flightSegments[0].departureDateTime);
    const endDate = extractDateTimeInfo(flightData.originDestinationOptions[0].flightSegments[0].arrivalDateTime);


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
                startDate={`${startDate.persianDate} (${startDate.day} ${startDate.monthName})`}
                endDate={`${endDate.persianDate} (${endDate.day} ${endDate.monthName})`}
                originAirport={originCityAirportName}
                destinationAirport={destinationCityAirportName}
                flightDuration={estimatedTime}
                flightType={isCharter ? 'چارتر' : 'سیستمی'}
                isRefundable={flightData.refundMethod}
                airplaneModel={flightData.originDestinationOptions[0].flightSegments[0].operatingAirline.equipment}
                allowedBaggage={flightData.originDestinationOptions[0].flightSegments[0].baggage}
                flightClass={classType}
                fareClass={flightData.originDestinationOptions[0].flightSegments[0].cabinClassCode}
            />

            <PassengersCostInfo costItems={costItems} />
        </div>
    );
};

export default DetailTab;
