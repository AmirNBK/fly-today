import React from 'react';
import SortingComponent from '../SortingComponent/SortingComponent';
import FlightResultCard from '../FlightResultCard/FlightResultCard';
import PaginatorComponent from '../PaginatorComponent/PaginatorComponent';
import { convertTimeToPersianFormat, extractDateTimeInfo, getCabinClass } from '@/commonFuncs/functions'
import { getFlightsPerPage } from '@/utils/paginationUtils';
import useAirlineDictionary from '@/hooks/useAirlineDictionary';
import useAirportDictionary from '@/hooks/useAirportDictionary';
import { totalData } from '@/types/types';
import { sortFlights, SortOption } from '@/utils/sortFlightsUtils';
import Image from 'next/image';
import filter from '@/assets/icons/filter.svg'
import sorting from '@/assets/icons/sorting.svg'
import MobileSortFilterActions from '../MobileSortFilterActions/MobileSortFilterActions';


const FlightResults = ({
    allData,
    CurrentPage,
    selectedSortingOption,
    arrivalAirports,
    DepartureAirport,
    CheckedLuggage
}: {
    allData: totalData,
    CurrentPage: number,
    selectedSortingOption: SortOption,
    arrivalAirports: string[],
    DepartureAirport: string[],
    CheckedLuggage: string[]
}) => {

    // Filter the flights based on the list of arrival airports, departure airports, and checked luggage
    const filteredFlights = allData.pricedItineraries.filter(flight => {
        const flightSegment = flight.originDestinationOptions[0].flightSegments[0];
        const flightArrivalAirport = flightSegment.arrivalAirportLocationCode;
        const flightDepartureAirport = flightSegment.departureAirportLocationCode;
        const flightAllowedBaggage = flightSegment.baggage;

        const isArrivalAirportValid = arrivalAirports.length > 0
            ? arrivalAirports.includes(flightArrivalAirport)
            : true;

        const isDepartureAirportValid = DepartureAirport.length > 0
            ? DepartureAirport.includes(flightDepartureAirport)
            : true;

        const isCheckedLuggageValid = CheckedLuggage.length > 0
            ? CheckedLuggage.includes(flightAllowedBaggage)
            : true;

        return isArrivalAirportValid && isDepartureAirportValid && isCheckedLuggageValid;
    });

    // Sort the flights based on the selected sorting option
    const sortedFlights = sortFlights(filteredFlights, selectedSortingOption);

    // Paginate the sorted flights
    const flightsData = getFlightsPerPage(CurrentPage, sortedFlights);

    // Create a dictionary of airlines to find airline Persian name easily
    const airlinesDictionary = useAirlineDictionary(allData.additionalData);

    // Create a dictionary of airports to find airport Persian name easily
    const airportsDictionary = useAirportDictionary(allData.additionalData);

    return (

        <div className='FlightResults flex flex-col items-end w-full gap-1'>

            <div className=' w-full sm:hidden block'>
                <MobileSortFilterActions selectedSortingOption={selectedSortingOption} />
            </div>

            <h2 className=' font-bold text-[#464646] text-xl'>
                بلیط هواپیمای تهران به استانبول
            </h2>

            <div className='flex flex-row sm:justify-between justify-end items-center w-full mt-2'>
                <SortingComponent selectedSortingOption={selectedSortingOption} />
                <p className='rtl text-sm'>
                    {filteredFlights.length} پرواز یافت شد . سه‌شنبه، 25 مهر 1402
                </p>
            </div>


            <div className='FlightResults__results w-full mt-6 flex  flex-col sm:gap-10 gap-5'>
                {filteredFlights.length > 0 ?
                    flightsData.map((item, index) => {
                        const flightSegment = item.originDestinationOptions[0].flightSegments[0];

                        const airlineNameFa = airlinesDictionary[item.validatingAirlineCode] || item.validatingAirlineCode;
                        const originCity = airportsDictionary[flightSegment.departureAirportLocationCode] || flightSegment.departureAirportLocationCode;
                        const destinationCity = airportsDictionary[flightSegment.arrivalAirportLocationCode] || flightSegment.arrivalAirportLocationCode;
                        const startTime = extractDateTimeInfo(flightSegment.departureDateTime);
                        const endTime = extractDateTimeInfo(flightSegment.arrivalDateTime);
                        const estimatedTime = convertTimeToPersianFormat(flightSegment.journeyDuration);

                        return (
                            <FlightResultCard
                                flightId={index}
                                airlineName={airlineNameFa}
                                flightRouteProps={{
                                    originCity: originCity.cityFa,
                                    destinationCity: destinationCity.cityFa,
                                    originCityAirportName: originCity.name,
                                    destinationCityAirportName: destinationCity.name,
                                    startTime: startTime,
                                    endTime: endTime,
                                    estimatedTime: estimatedTime,
                                }}
                                ticketDetailsProps={{
                                    price: item.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare / 10,
                                    currency: "تومان",
                                }}
                                flightOptionsProps={{
                                    isCharter: item.isCharter,
                                    classType: getCabinClass(flightSegment.cabinClassCode),
                                    availableSeats: flightSegment.seatsRemaining,
                                    flightNumber: flightSegment.operatingAirline.flightNumber || 7856,
                                    provider: airlineNameFa,
                                }}
                                pricingBreakdownPerPassenger={item.airItineraryPricingInfo.ptcFareBreakdown}
                                priceFare={item.airItineraryPricingInfo.itinTotalFare.totalFare}
                                isRefundable={item.refundMethod}
                                airplaneModel={flightSegment.operatingAirline.equipment}
                                allowedBaggage={flightSegment.baggage}
                                fareClass={flightSegment.cabinClassCode}
                            />
                        )
                    })
                    :
                    <div className="flex flex-col items-center justify-center h-64">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                        <h3 className="mt-4 text-lg font-medium text-gray-800">هیچ پروازی پیدا نشد</h3>
                        <p className="mt-2 text-sm text-gray-500 rtl">فيلترهای جستجوی خود را تنظیم کنید یا بعداً دوباره بررسی کنید.</p>
                    </div>
                }

            </div>

            <PaginatorComponent data={filteredFlights} currentPage={CurrentPage} />
        </div>
    );
};

export default FlightResults;
