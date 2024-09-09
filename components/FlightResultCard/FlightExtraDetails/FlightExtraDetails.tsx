'use client';
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import flight from '@/assets/icons/flight.svg';
import Image from 'next/image';
import docs from '@/assets/icons/doc.svg';
import DetailTab from './DetailTab/DetailTab';
import { useAppContext } from '@/context/AppContext';

const FlightExtraDetails: React.FC<{ flightId: string }> = ({ flightId }) => {
    const { extraDetailsToggle } = useAppContext();

    return (
        <div
            className={`FlightExtraDetails mt-8 transition-all duration-300 ease-in-out ${extraDetailsToggle[flightId] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
            <TabView className='rtl'>
                <TabPanel header={
                    <div className='flex flex-row items-center gap-3 w-full h-full'>
                        <Image src={flight} alt='flightIcon' />
                        <p className='text-white'>
                            جزئیات پرواز
                        </p>
                    </div>
                }>
                    <DetailTab />
                </TabPanel>
                <TabPanel disabled header={
                    <div className='flex flex-row items-center gap-3 w-full h-full'>
                        <Image src={docs} alt='flightIcon' />
                        <p>
                            قوانین و شرایط
                        </p>
                    </div>
                }>
                </TabPanel>
            </TabView>
        </div>
    );
};

export default FlightExtraDetails;