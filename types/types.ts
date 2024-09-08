export interface Sort {
    name: string;
    code: string;
}

export interface FilterOption {
    label: string;
    value: string;
}

export interface SingleFilterProps {
    filterName: string;
    options: FilterOption[];
    isCheckboxFilter?: boolean;
    isRangeFilter?: boolean;
}

export interface FlightOptionsProps {
    isCharter: boolean;
    classType: string;
    availableSeats: number;
    flightNumber: string;
    provider: string;
}

export interface CostItem {
    label: string;
    amount: string;
    isBold?: boolean;
    isHighlight?: boolean;
}

export interface PassengersCostInfoProps {
    costItems: CostItem[];
}