import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SortOption } from '@/utils/sortFlightsUtils';
import { getDefaultSort, updateSortInUrl, sorts } from '@/utils/sortUtils';

const MobileSortingPopup = ({ closeSidebar, selectedSortingOption }: { closeSidebar: () => void, selectedSortingOption: SortOption }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedSort, setSelectedSort] = useState<SortOption | string>(getDefaultSort(selectedSortingOption)?.code);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    const handleApplySort = () => {
        updateSortInUrl(selectedSort, searchParams, router);
        handleClose();
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => closeSidebar(), 300);
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-10 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleClose}
            ></div>

            <div
                className={`fixed bottom-0 left-0 right-0 bg-white p-6 rounded-t-lg shadow-lg z-20 rtl transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <h2 className="text-lg font-semibold mb-4">مرتب‌ سازی</h2>

                <div className="flex flex-col gap-4">
                    {sorts.map((sort) => (
                        <label key={sort.code} className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="sort"
                                value={sort.code}
                                checked={selectedSort === sort.code}
                                onChange={() => setSelectedSort(sort.code as SortOption)}
                            />
                            {sort.name}
                        </label>
                    ))}
                </div>

                <button
                    onClick={handleApplySort}
                    className="mt-6 w-full bg-[#0f4b81] text-white py-3 rounded-md text-center"
                >
                    مرتب‌سازی نتایج
                </button>

                <button
                    onClick={handleClose}
                    className="absolute top-4 left-4 text-gray-600"
                >
                    ✕
                </button>
            </div>
        </>
    );
};

export default MobileSortingPopup;
