import React from 'react';
import SortingComponent from '../SortingComponent/SortingComponent';
import FlightResultCard from '../FlightResultCard/FlightResultCard';

const FlightResults = () => {

    return (
        <div className='FlightResults flex flex-col items-end w-full gap-1'>
            <h2 className=' font-bold text-[#464646] text-xl'>
                بلیط هواپیمای تهران به استانبول
            </h2>

            <div className='flex flex-row justify-between items-center w-full'>
                <SortingComponent />
                <p className='rtl text-sm'>
                    27 پرواز یافت شد . سه‌شنبه، ۱۲ اردیبهشت ۱۴۰۰
                </p>
            </div>


            <div className='FlightResults__results w-full mt-6 flex flex-col gap-10'>
                <FlightResultCard
                    airlineName="ماهان"
                    flightRouteProps={{
                        originCity: "تهران (THR)",
                        destinationCity: "استانبول (IST)",
                        startTime: "۱۲:۴۵",
                        endTime: "۱۷:۳۰",
                        estimatedTime: "3 ساعت و 45 دقیقه",
                    }}
                    ticketDetailsProps={{
                        passengerCount: 1,
                        price: 1370000,
                        currency: "تومان",
                    }}
                    flightOptionsProps={{
                        isCharter: true,
                        classType: "اکونومی",
                        availableSeats: 7,
                        flightNumber: "7856",
                        provider: "پرایس لاین",
                    }}
                />

                <FlightResultCard
                    airlineName="كاسپين"
                    flightRouteProps={{
                        originCity: "تهران (THR)",
                        destinationCity: "استانبول (IST)",
                        startTime: "۱۲:۴۵",
                        endTime: "۱۷:۳۰",
                        estimatedTime: "3 ساعت و 45 دقیقه",
                    }}
                    ticketDetailsProps={{
                        passengerCount: 1,
                        price: 1370000,
                        currency: "تومان",
                    }}
                    flightOptionsProps={{
                        isCharter: true,
                        classType: "اکونومی",
                        availableSeats: 7,
                        flightNumber: "7856",
                        provider: "پرایس لاین",
                    }}
                />
            </div>
        </div>
    );
};

export default FlightResults;