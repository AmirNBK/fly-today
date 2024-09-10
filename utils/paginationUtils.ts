import { PricedItinerary } from "@/types/types";

const FLIGHT_RESULTS_PER_PAGE = 7;

// Returns a slice of flight results for the specified page.
export const getFlightsPerPage = (currentPageIndex: number, flightData: PricedItinerary[]) => {
    const startIndex = (currentPageIndex - 1) * FLIGHT_RESULTS_PER_PAGE;
    const endIndex = startIndex + FLIGHT_RESULTS_PER_PAGE;
    return flightData.slice(startIndex, endIndex);
};
