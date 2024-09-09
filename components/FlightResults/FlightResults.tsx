import React from 'react';
import SortingComponent from '../SortingComponent/SortingComponent';
import FlightResultCard from '../FlightResultCard/FlightResultCard';
import PaginatorComponent from '../PaginatorComponent/PaginatorComponent';
import { FlightData } from '@/types/types';
import { convertTimeToPersianFormat, extractDateTimeInfo, getCabinClass } from '@/commonFuncs/functions'


const FlightResults = ({ data }: { data: FlightData }) => {

    const airlinesDict = data.additionalData.airlines.reduce((acc, airline) => {
        acc[airline.iata] = airline.nameFa;
        return acc;
    }, {});

    const airportsDict = data.additionalData.airports.reduce((acc, airport) => {
        acc[airport.iata] = airport.cityFa;
        return acc;
    }, {});


    return (
        <div className='FlightResults flex flex-col items-end w-full gap-1'>
            <h2 className=' font-bold text-[#464646] text-xl'>
                بلیط هواپیمای تهران به استانبول
            </h2>

            <div className='flex flex-row justify-between items-center w-full'>
                <SortingComponent />
                <p className='rtl text-sm'>
                    {data.pricedItineraries.length} پرواز یافت شد . سه‌شنبه، 25 مهر 1402
                </p>
            </div>


            <div className='FlightResults__results w-full mt-6 flex flex-col gap-10'>
                {data.pricedItineraries.map((item, index) => {
                    const airlineNameFa = airlinesDict[item.validatingAirlineCode] || item.validatingAirlineCode;
                    const originCityFa = airportsDict[item.originDestinationOptions[0].flightSegments[0].departureAirportLocationCode] || item.originDestinationOptions[0].flightSegments[0].departureAirportLocationCode;
                    const destinationCityFa = airportsDict[item.originDestinationOptions[0].flightSegments[0].arrivalAirportLocationCode] || item.originDestinationOptions[0].flightSegments[0].arrivalAirportLocationCode;
                    const startTime = extractDateTimeInfo(item.originDestinationOptions[0].flightSegments[0].departureDateTime);
                    const endTime = extractDateTimeInfo(item.originDestinationOptions[0].flightSegments[0].arrivalDateTime);
                    const estimatedTime = convertTimeToPersianFormat(item.originDestinationOptions[0].flightSegments[0].journeyDuration)

                    return (
                        <FlightResultCard
                            flightId={index}
                            airlineName={airlineNameFa}
                            flightRouteProps={{
                                originCity: originCityFa,
                                destinationCity: destinationCityFa,
                                startTime: startTime.formattedTime,
                                endTime: endTime.formattedTime,
                                estimatedTime: estimatedTime,
                            }}
                            ticketDetailsProps={{
                                price: item.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare / 10,
                                currency: "تومان",
                            }}
                            flightOptionsProps={{
                                isCharter: item.isCharter,
                                classType:  getCabinClass(item.originDestinationOptions[0].flightSegments[0].cabinClassCode),
                                availableSeats: item.originDestinationOptions[0].flightSegments[0].seatsRemaining,
                                flightNumber: item.originDestinationOptions[0].flightSegments[0].operatingAirline.flightNumber || 7856,
                                provider: airlineNameFa,
                            }}
                        />
                    )
                })}
            </div>

            <PaginatorComponent />
        </div>
    );
};

export default FlightResults;