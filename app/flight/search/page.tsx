import FlightFilters from "@/components/FlightFilters/FlightFilters";
import FlightResults from "@/components/FlightResults/FlightResults";
import localFont from 'next/font/local';
import { FC } from 'react';
import data from '@/data/data.json';
import { PageQueryParams, totalData } from "@/types/types";
import { SortOption } from "@/utils/sortFlightsUtils";

const IranSans = localFont({ src: '../../../assets/fonts/IRANSansXFaNum-Regular.ttf' });

const Results: FC<PageQueryParams> = ({ searchParams }) => {
    const CurrentPageIndex = parseInt(searchParams.page as string, 10) || 1;
    const selectedSortingOption = (searchParams.sort as SortOption) || 'EarliestTime';

    // Extract the arrival airports filter and split by comma if multiple
    const arrivalAirports = (searchParams.ArrivalAirport as string)?.split(',') || [];
    const DepartureAirport = (searchParams.DepartureAirport as string)?.split(',') || [];
    const CheckedLuggage = (searchParams.CheckedLuggage as string)?.split(',') || [];


    return (
        <main className={`${IranSans.className} flex flex-row sm:p-6 p-4 sm:w-10/12 w-full gap-11 mx-auto mt-12`}>
            <div className="flex-[2]">
                <FlightResults 
                    allData={data as totalData} 
                    CurrentPage={CurrentPageIndex}
                    selectedSortingOption={selectedSortingOption}
                    arrivalAirports={arrivalAirports}
                    DepartureAirport={DepartureAirport}
                    CheckedLuggage={CheckedLuggage}
                />
            </div>
            <div className="flex-[0.7] sm:block hidden">
                <FlightFilters filters={data.filter} />
            </div>
        </main>
    );
};

export default Results;
