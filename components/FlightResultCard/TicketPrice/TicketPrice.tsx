import MobileFlightDetailsButton from '@/components/MobileFlightDetailsButton/MobileFlightDetailsButton';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import React from 'react';

interface TicketPriceProps {
    price: number;
    currency: string;
    flightId?: string | number;
    airlineName: string;
    flightRouteProps: any; // Replace with correct type
    flightOptionsProps: { isCharter: boolean; classType: string };
    pricingBreakdownPerPassenger: any; // Replace with correct type
    isRefundable: boolean;
    airplaneModel: string;
    allowedBaggage: any; // Replace with correct type
    fareClass: string;
}

const TicketPrice: React.FC<TicketPriceProps> = ({
    price,
    currency,
    flightId,
    airlineName,
    flightRouteProps,
    flightOptionsProps,
    pricingBreakdownPerPassenger,
    isRefundable,
    airplaneModel,
    allowedBaggage,
    fareClass
}) => {
    return (
        <div className='TicketPrice flex sm:flex-col flex-row-reverse items-center w-full gap-4 sm:mt-0 mt-3'>
            <div className='flex flex-col sm:items-center items-end mt-3 sm:mt-0 sm:gap-4'>
                <p className='text-[#8d8d8d] text-sm'>یک نفر</p>
                <div className='flex flex-row gap-2 items-center rtl'>
                    <p className='text-[#1773dc] font-bold text-xl'>{price.toLocaleString()}</p>
                    <p className='text-[#8d8d8d] text-sm'>{currency}</p>
                </div>
            </div>

            <div className='sm:block hidden w-full'>
                <PrimaryButton label='انتخاب بلیط' />
            </div>

            <div className='sm:hidden block w-full'>
                <MobileFlightDetailsButton
                    flightId={flightId?.toString() || ''}
                    airlineName={airlineName}
                    flightRouteProps={flightRouteProps}
                    flightOptionsProps={flightOptionsProps}
                    priceFare={price}
                    pricingBreakdownPerPassenger={pricingBreakdownPerPassenger}
                    isRefundable={isRefundable}
                    airplaneModel={airplaneModel}
                    allowedBaggage={allowedBaggage}
                    fareClass={fareClass}
                    price={price}
                />
            </div>
        </div>
    );
};

export default TicketPrice;
