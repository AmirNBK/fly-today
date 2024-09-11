import React from 'react';

const PrimaryButton = ({ label }: { label: string }) => {
    return (
        <button className='PrimaryButton bg-[#1773dc] px-4 py-3  sm:text-base text-sm rounded-md w-full text-center text-white'>
            {label}
        </button>
    );
};

export default PrimaryButton;