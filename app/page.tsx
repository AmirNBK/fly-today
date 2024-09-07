import FlightFilters from "@/components/FlightFilters/FlightFilters";
import FlightResults from "@/components/FlightResults/FlightResults";
import localFont from 'next/font/local'
const IranSans = localFont({ src: '../assets/fonts/IRANSansXFaNum-Regular.ttf' })

export default function Home() {

  return (
    <main className={`${IranSans.className} flex flex-row p-6 w-9/12 gap-11 mx-auto`}>
      <div className="flex-[2]">
        <FlightResults />
      </div>
      <div className="flex-[0.7]">
        <FlightFilters />
      </div>
    </main>
  );
}
