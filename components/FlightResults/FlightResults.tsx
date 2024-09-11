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

    // Filter the flights based on the list of arrival airports
    // Filter the flights based on the list of arrival airports and departure airports
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

    // Sort the flights based on the selected option
    const sortedFlights = sortFlights(filteredFlights, selectedSortingOption);

    // Paginate the sorted flights
    const flightsData = getFlightsPerPage(CurrentPage, sortedFlights);

    // Create a dictionary of airlines to find airline Persian name easily
    const airlinesDictionary = useAirlineDictionary(allData.additionalData);

    // Create a dictionary of airports to find airport Persian name easily
    const airportsDictionary = useAirportDictionary(allData.additionalData);

    return (
        <div className='FlightResults flex flex-col items-end w-full gap-1'>
            <h2 className=' font-bold text-[#464646] text-xl'>
                بلیط هواپیمای تهران به استانبول
            </h2>

            <div className='flex flex-row justify-between items-center w-full'>
                <SortingComponent />
                <p className='rtl text-sm'>
                    {filteredFlights.length} پرواز یافت شد . سه‌شنبه، 25 مهر 1402
                </p>
            </div>

            <div className='FlightResults__results w-full mt-6 flex flex-col gap-10'>
                {flightsData.map((item, index) => {
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
                })}
            </div>

            <PaginatorComponent data={allData} />
        </div>
    );
};

export default FlightResults;
