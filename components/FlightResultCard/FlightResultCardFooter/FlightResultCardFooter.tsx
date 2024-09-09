import React from 'react';
import FlightOptions from '../FlightOptions/FlightOptions';
import FlightExtraDetails from '../FlightExtraDetails/FlightExtraDetails';

const FlightResultCardFooter = ({ flightOptionsProps, flightId }: {
    flightOptionsProps: {
        isCharter: boolean;
        classType: string;
        availableSeats: number;
        flightNumber: string;
        provider: string;
    };
    flightId: string;
}) => {
    return (
        <div className='FlightResultCardFooter'>
            <FlightOptions {...flightOptionsProps} flightId={flightId} />

            <FlightExtraDetails flightId={flightId} />
        </div>
    );
};

export default FlightResultCardFooter;