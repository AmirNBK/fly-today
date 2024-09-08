import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import flight from '@/assets/icons/flight.svg'
import Image from 'next/image';
import docs from '@/assets/icons/doc.svg'

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
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
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