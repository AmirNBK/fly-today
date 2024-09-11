import { SortOption } from '@/utils/sortFlightsUtils';
import { Sort } from '@/types/types';

// Sorting options (shared between components)
export const sorts: Sort[] = [
    { name: 'زمان (زودترین)', code: 'EarliestTime' },
    { name: 'زمان (دیرترین)', code: 'LatestTime' },
    { name: 'قیمت (گران ترین)', code: 'HighestPrice' },
    { name: 'قیمت (ارزان ترین)', code: 'LowestPrice' },
];

// Function to extract sort option from URL or provide a default
export const getDefaultSort = (selectedSortingOption: SortOption | null) => {
    const defaultSort = sorts[0]; // Default to the first sort option

    if (!selectedSortingOption) return defaultSort;

    const sortOption = sorts.find((sort) => sort.code === selectedSortingOption);
    return sortOption || defaultSort;
};

// Function to handle URL updates with sorting params
export const updateSortInUrl = (sortCode: string, searchParams: URLSearchParams, router: any) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('sort', sortCode);
    const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
    router.push(newUrl);
};
