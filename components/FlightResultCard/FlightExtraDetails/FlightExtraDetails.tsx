import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import flight from '@/assets/icons/flight.svg'
import Image from 'next/image';
import docs from '@/assets/icons/doc.svg'
import DetailTab from './DetailTab/DetailTab';

const FlightExtraDetails = () => {


    return (
        <div className='FlightExtraDetails mt-8'>
            <TabView className='rtl'>
                <TabPanel header={
                    <div className='flex flex-row items-center gap-3 w-full h-full'>
                        <Image src={flight} alt='flightIcon' />
                        <p className=' text-white'>
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