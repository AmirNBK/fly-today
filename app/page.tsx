import FlightResults from "@/components/FlightResults/FlightResults";
import localFont from 'next/font/local'
const IranSans = localFont({ src: '../assets/fonts/IRANSansXFaNum-Regular.ttf' })

export default function Home() {

  return (
    <main className={`${IranSans.className} flex flex-row gap-6 p-6 w-full`}>
      <FlightResults />
    </main>
  );
}
