'use client';
import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import MobileFlightDetailsPopup from '../MobileFlightDetailsPopup/MobileFlightDetailsPopup';
import { useAppContext } from '@/context/AppContext';

type FlightDetailsButtonProps = {
    flightId: string | number | undefined;
    airlineName: string;
    flightRouteProps: any; // Replace with the correct type
    flightOptionsProps: { isCharter: boolean; classType: string };
    priceFare: number;
    pricingBreakdownPerPassenger: any; // Replace with the correct type
    isRefundable: string;
    airplaneModel: string;
    allowedBaggage: any; // Replace with the correct type
    fareClass: string;
    price: number;
};

const MobileFlightDetailsButton: React.FC<FlightDetailsButtonProps> = ({
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
}) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { toggleExtraDetails } = useAppContext();


    const openPopup = () => {
        setIsPopupVisible(true)
        toggleExtraDetails(flightId)

    };
    const closePopup = () => setIsPopupVisible(false);

    return (
        <>
            <PrimaryButton label='جزئیات و انتخاب' onClick={openPopup} />

            {isPopupVisible && (
                <MobileFlightDetailsPopup
                    closePopup={closePopup}
                    flightId={flightId}
                    airlineName={airlineName}
                    flightRouteProps={flightRouteProps}
                    flightOptionsProps={flightOptionsProps}
                    priceFare={priceFare}
                    pricingBreakdownPerPassenger={pricingBreakdownPerPassenger}
                    isRefundable={isRefundable}
                    airplaneModel={airplaneModel}
                    allowedBaggage={allowedBaggage}
                    fareClass={fareClass}
                    price={price}
                />
            )}
        </>
    );
};

export default MobileFlightDetailsButton;
