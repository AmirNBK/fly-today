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

export interface FlightResultCardProps {
    airlineName: string;
    flightRouteProps: {
        originCity: string;
        destinationCity: string;
        startTime: string;
        endTime: string;
        estimatedTime: string;
    };
    ticketDetailsProps: {
        passengerCount: number;
        price: number;
        currency: string;
    };
    flightOptionsProps: {
        isCharter: boolean;
        classType: string;
        availableSeats: number;
        flightNumber: string;
        provider: string;
    };
}