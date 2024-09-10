import { PricedItinerary } from "@/types/types";

export type SortOption = 'EarliestTime' | 'LatestTime' | 'LowestPrice' | 'HighestPrice';

export const sortFlights = (flights: PricedItinerary[], sortOption: SortOption): PricedItinerary[] => {
    switch (sortOption) {
        case 'EarliestTime':
            return flights.sort((a, b) =>
                new Date(a.originDestinationOptions[0].flightSegments[0].departureDateTime).getTime() -
                new Date(b.originDestinationOptions[0].flightSegments[0].departureDateTime).getTime()
            );
        case 'LatestTime':
            return flights.sort((a, b) =>
                new Date(b.originDestinationOptions[0].flightSegments[0].departureDateTime).getTime() -
                new Date(a.originDestinationOptions[0].flightSegments[0].departureDateTime).getTime()
            );
        case 'LowestPrice':
            return flights.sort((a, b) =>
                a.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare -
                b.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare
            );
        case 'HighestPrice':
            return flights.sort((a, b) =>
                b.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare -
                a.airItineraryPricingInfo.ptcFareBreakdown[0].passengerFare.totalFare
            );
        default:
            return flights;
    }
};
