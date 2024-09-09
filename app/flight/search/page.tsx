import FlightFilters from "@/components/FlightFilters/FlightFilters";
import FlightResults from "@/components/FlightResults/FlightResults";
import localFont from 'next/font/local'
const IranSans = localFont({ src: '../../../assets/fonts/IRANSansXFaNum-Regular.ttf' })
import data from '@/data/data.json'

export default function Home() {


    return (
        <main className={`${IranSans.className} flex flex-row p-6 w-10/12 gap-11 mx-auto mt-12`}>
            <div className="flex-[2]">
                <FlightResults data={data} />
            </div>
            <div className="flex-[0.7]">
                <FlightFilters />
            </div>
        </main>
    );
}
