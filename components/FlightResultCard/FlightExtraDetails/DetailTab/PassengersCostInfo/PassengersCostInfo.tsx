import { PassengersCostInfoProps } from '@/types/types';
import React from 'react';

const PassengersCostInfo: React.FC<PassengersCostInfoProps> = ({ costItems }) => {
    return (
        <div className='flex sm:flex-row flex-col sm:gap-6 border border-[#eeeeee] mt-8 text-sm sm:w-fit w-full'>
            {costItems.map((item, index) => (
                <div key={index} className={`flex flex-row rtl gap-4 border-l pl-3 py-3 px-3 ${index === costItems.length - 1 ? 'border-l-0' : ''}`}>
                    <p className={item.isBold ? 'font-bold' : ''}>
                        {item.label}
                    </p>
                    <p className={item.isHighlight ? 'text-[#1773dc] font-bold' : ''}>
                        {item.amount}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PassengersCostInfo;