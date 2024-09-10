import React from 'react';
import SortingComponent from '../SortingComponent/SortingComponent';
import FlightResultCard from '../FlightResultCard/FlightResultCard';
import PaginatorComponent from '../PaginatorComponent/PaginatorComponent';
import { FlightData } from '@/types/types';
import { convertTimeToPersianFormat, createAirlinesDict, createAirportsDict, extractDateTimeInfo, getCabinClass } from '@/commonFuncs/functions'


const FlightResults = ({ data, allData }: { data: FlightData, allData: any }) => {

    const airlinesDict = createAirlinesDict(allData.additionalData);
    const airportsDict = createAirportsDict(allData.additionalData);


    return (
        <div className='FlightResults flex flex-col items-end w-full gap-1'>
            <h2 className=' font-bold text-[#464646] text-xl'>
                بلیط هواپیمای تهران به استانبول
            </h2>

            <div className='flex flex-row justify-between items-center w-full'>
                <SortingComponent />
                <p className='rtl text-sm'>
                    {allData.pricedItineraries.length} پرواز یافت شد . سه‌شنبه، 25 مهر 1402
                </p>
            </div>


            <div className='FlightResults__results w-full mt-6 flex flex-col gap-10'>
                {data.map((item, index) => {
                    const airlineNameFa = airlinesDict[item.validatingAirlineCode] || item.validatingAirlineCode;
                    const originCity = airportsDict[item.originDestinationOptions[0].flightSegments[0].departureAirportLocationCode] || item.originDestinationOptions[0].flightSegments[0].departureAirportLocationCode;
                    const destinationCity = airportsDict[item.originDestinationOptions[0].flightSegments[0].arrivalAirportLocationCode] || item.originDestinationOptions[0].flightSegments[0].arrivalAirportLocationCode;
                    const startTime = extractDateTimeInfo(item.originDestinationOptions[0].flightSegments[0].departureDateTime);
                    const endTime = extractDateTimeInfo(item.originDestinationOptions[0].flightSegments[0].arrivalDateTime);
                    const estimatedTime = convertTimeToPersianFormat(item.originDestinationOptions[0].flightSegments[0].journeyDuration);

                    return (
                        <FlightResultCard
                            flightData={item}
                            flightId={index}
                            airlineName={airlineNameFa}
                            flightRouteProps={{
                                originCity: originCity.cityFa,
                                destinationCity: destinationCity.cityFa,
                                originCityAirportName: originCity.name,
                                destinationCityAirportName: destinationCity.name,
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
                                classType: getCabinClass(item.originDestinationOptions[0].flightSegments[0].cabinClassCode),
                                availableSeats: item.originDestinationOptions[0].flightSegments[0].seatsRemaining,
                                flightNumber: item.originDestinationOptions[0].flightSegments[0].operatingAirline.flightNumber || 7856,
                                provider: airlineNameFa,
                            }}
                        />
                    )
                })}
            </div>

            <PaginatorComponent data={allData} />
        </div>
    );
};

export default FlightResults;