import React from 'react';

interface PrimaryButtonProps {
    label: string;
    onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick }) => {
    return (
        <button
            className='PrimaryButton bg-[#1773dc] px-4 py-3 sm:text-base text-sm rounded-md w-full text-center text-white'
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;
