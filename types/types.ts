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
  flightData: any
  airlineName: string;
  flightId: string
  flightRouteProps: {
    originCity: string;
    destinationCity: string;
    originCityAirportName : string;
    destinationCityAirportName : string;
    startTime: string;
    endTime: string;
    estimatedTime: string;
  };
  ticketDetailsProps: {
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

export interface AirportFilterItem {
  airportId: string;
  resultCount: number;
}

export interface AirportFilter {
  filterName: string;
  items: {
    [key: string]: AirportFilterItem;
  };
}

export interface BaggageFilterItem {
  baggageName: string;
  resultCount: number;
}

export interface BaggageFilter {
  filterName: string;
  items: {
    [key: string]: BaggageFilterItem;
  };
}

export interface Filter {
  airports: AirportFilter[];
  baggage: BaggageFilter[];
}

export interface FlightData {
  airTripType: string;
  airTripTypeStr: string;
  filter: Filter;
}
