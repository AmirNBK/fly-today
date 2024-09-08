import React from 'react';
import localFont from 'next/font/local'
import flightIcon from '@/assets/icons/flightIcon.png'
import Image from 'next/image';
import FlightDetailedInfo from './FlightDetailedInfo/FlightDetailedInfo';
import PassengersCostInfo from './PassengersCostInfo/PassengersCostInfo';
const IranSans = localFont({ src: '../../../../assets/fonts/IRANSansXFaNum-Regular.ttf' })

const DetailTab = () => {
    const costItems = [
        { label: 'x 2 بزرگسال', amount: '۱,۳۷۰,۰۰۰ تومان' },
        { label: 'x 1 کودک', amount: '۱,۳۷۰,۰۰۰ تومان' },
        { label: 'x 1 نوزاد', amount: '۱,۳۷۰,۰۰۰ تومان' },
        { label: 'مجموع :', amount: '۱,۳۷۰,۰۰۰ تومان', isBold: true, isHighlight: true }
    ];

    return (
        <div className={`${IranSans.className} DetailTab flex flex-col items-start mt-3`}>
            <h1 className=' font-bold text-lg'>
                پرواز رفت تهران - استانبول
            </h1>

            <FlightDetailedInfo
                airlineName="ماهان"
                originCity="تهران (THR)"
                destinationCity="استانبول (IST)"
                startTime="۱۲:۴۵"
                endTime="۱۷:۳۰"
                startDate="12 اردبیهشت 1399 (07 Apr)"
                endDate="12 اردبیهشت 1399 (07 Apr)"
                originAirport="Imam Khomeini Intl"
                destinationAirport="Istanbul Airport Intl"
                flightDuration="3 ساعت و ۴۵ دقیقه"
                flightType="سیستمی"
                isRefundable="غیر قابل استرداد"
                airplaneModel="Airbus A320"
                allowedBaggage="20 کیلوگرم"
                flightClass="اکونومی"
                fareClass="A"
            />


            <PassengersCostInfo costItems={costItems} />

        </div>
    );
};

export default DetailTab;