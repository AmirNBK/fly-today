'use client';
import React, { useState, useEffect } from 'react';
import FlightExtraDetails from '../FlightResultCard/FlightExtraDetails/FlightExtraDetails';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const MobileFlightDetailsPopup = ({
    closePopup,
    flightId,
    airlineName,
    flightRouteProps,
    flightOptionsProps,
    priceFare,
    pricingBreakdownPerPassenger,
    isRefundable,
    airplaneModel,
    allowedBaggage,
    fareClass,
    price
}: {
    closePopup: () => void;
    flightId: string | number | undefined;
    airlineName: string;
    flightRouteProps: any; // Replace with appropriate type
    flightOptionsProps: any; // Replace with appropriate type
    priceFare: number;
    pricingBreakdownPerPassenger: any; // Replace with appropriate type
    isRefundable: string;
    airplaneModel: string;
    allowedBaggage: any; // Replace with appropriate type
    fareClass: string;
    price: number
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    const handleClosePopup = () => {
        setIsVisible(false);
        setTimeout(() => closePopup(), 300);
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-10 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleClosePopup}
            ></div>

            <div
                className={`fixed inset-0 bg-white z-20 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'} flex flex-col h-full`}
                style={{ maxHeight: '100vh' }}
            >
                <div className='flex justify-between items-center mb-4 rtl p-4'
                style={{
                    boxShadow : '0 1px 0 0 #eee'
                }}
                >
                    <h2 className='text-lg font-semibold'>جزئیات پرواز</h2>
                    <button onClick={handleClosePopup} className='text-gray-600'>✕</button>
                </div>

                <div className='flex-1 overflow-y-auto p-6'>
                    <FlightExtraDetails
                        flightId={flightId}
                        airlineName={airlineName}
                        flightRouteProps={flightRouteProps}
                        isCharter={flightOptionsProps.isCharter}
                        classType={flightOptionsProps.classType}
                        priceFare={priceFare}
                        pricingBreakdownPerPassenger={pricingBreakdownPerPassenger}
                        isRefundable={isRefundable}
                        airplaneModel={airplaneModel}
                        allowedBaggage={allowedBaggage}
                        fareClass={fareClass}
                    />
                </div>

                <div className='flex flex-row-reverse items-end gap-6 p-3'
                style={{
                    boxShadow : '0 -5px 8px 0 rgba(0, 0, 0, 0.08)'
                }}
                >
                    <div className='flex flex-col sm:items-center items-end mt-3 sm:mt-0 sm:gap-4'>
                        <p className='text-[#8d8d8d] text-sm'>یک نفر</p>
                        <div className='flex flex-row gap-1 items-center rtl'>
                            <p className='text-[#1773dc] font-bold text-lg'>{price.toLocaleString()}</p>
                            <p className='text-[#8d8d8d] text-sm'>تومان</p>
                        </div>
                    </div>

                    <div className='w-full'>
                        <PrimaryButton label='انتخاب بلیط' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileFlightDetailsPopup;
