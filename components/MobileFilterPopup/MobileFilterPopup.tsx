'use client';
import React, { useState, useEffect } from 'react';
import FilterSection from '../FilterSection/FilterSection';
import useResetFilters from '@/hooks/useResetFilters';
import { Filters } from '@/types/types';

const MobileFilterPopup = ({
    closePopup,
    filters,
    filteredFlightsLength,
}: {
    closePopup: () => void;
    filters: Filters;
    filteredFlightsLength: number;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const resetFilters = useResetFilters();

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
                className={`fixed inset-0 bg-white z-20 p-6 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className="flex flex-col h-full">
                    {/* Header section */}
                    <div className="flex justify-between items-center mb-4 rtl">
                        <h2 className="text-lg font-semibold">فیلتر کردن نتایج</h2>
                        <button onClick={handleClosePopup} className="text-gray-600">✕</button>
                    </div>

                    {/* Filter details and results section */}
                    <div className="flex justify-between items-center mt-8 mb-4 rtl">
                        <p>{filteredFlightsLength} هتل پیدا شد</p>
                        <p className="text-[#1b76ff] cursor-pointer" onClick={resetFilters}>
                            لغو فیلترها
                        </p>
                    </div>

                    {/* Scrollable filter section */}
                    <div className="flex-1 overflow-y-auto">
                        <FilterSection filters={filters} />
                    </div>

                    {/* Footer button */}
                    <button
                        onClick={handleClosePopup}
                        className="mt-6 w-full bg-[#0f4b81] text-white py-3 rounded-md text-center"
                    >
                        مشاهده نتابح
                    </button>
                </div>
            </div>
        </>
    );
};

export default MobileFilterPopup;
