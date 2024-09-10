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


    return (
        <main className={`${IranSans.className} flex flex-row p-6 w-10/12 gap-11 mx-auto mt-12`}>
            <div className="flex-[2]">
                <FlightResults allData={data as totalData} CurrentPage={CurrentPageIndex}
                    selectedSortingOption={selectedSortingOption}
                />
            </div>
            <div className="flex-[0.7]">
                <FlightFilters />
            </div>
        </main>
    );
};

export default Results;
