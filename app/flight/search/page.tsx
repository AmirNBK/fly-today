import FlightFilters from "@/components/FlightFilters/FlightFilters";
import FlightResults from "@/components/FlightResults/FlightResults";
import localFont from 'next/font/local';
import { FC } from 'react';
import data from '@/data/data.json';
const IranSans = localFont({ src: '../../../assets/fonts/IRANSansXFaNum-Regular.ttf' });

const ITEMS_PER_PAGE = 7;

const getPaginatedData = (page: number) => {
    const flightData = data.pricedItineraries;
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return flightData.slice(startIndex, endIndex);
};

interface PageProps {
    searchParams: {
        page?: string;
    };
}

const Home: FC<PageProps> = ({ searchParams }) => {
    const page = parseInt(searchParams.page as string, 10) || 1;
    const flights = getPaginatedData(page);
    const totalPages = Math.ceil(data.pricedItineraries.length / ITEMS_PER_PAGE);

    return (
        <main className={`${IranSans.className} flex flex-row p-6 w-10/12 gap-11 mx-auto mt-12`}>
            <div className="flex-[2]">
                <FlightResults data={flights} allData={data} currentPage={page} totalPages={totalPages} />
            </div>
            <div className="flex-[0.7]">
                <FlightFilters />
            </div>
        </main>
    );
};

export default Home;
