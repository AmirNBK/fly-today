export interface PageQueryParams {
  searchParams: {
    page?: string;
  };
}

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

export interface flightOptionsProps {
  isCharter: boolean;
  classType: string;
  availableSeats: number;
  flightNumber: string | number;
  provider: string;
};

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
  flightId: string | number
  flightRouteProps: {
    originCity: string;
    destinationCity: string;
    originCityAirportName: string;
    destinationCityAirportName: string;
    startTime: { year: number; month: number; monthName: string; day: number; hours: number; minutes: number; formattedDate: string; formattedTime: string; persianDate: string; persianTime: string; };
    endTime: { year: number; month: number; monthName: string; day: number; hours: number; minutes: number; formattedDate: string; formattedTime: string; persianDate: string; persianTime: string; }; estimatedTime: string;
  };
  ticketDetailsProps: {
    price: number;
    currency: string;
  };
  flightOptionsProps: {
    isCharter: boolean;
    classType: string;
    availableSeats: number;
    flightNumber: string | number;
    provider: string;
  };
  pricingBreakdownPerPassenger: PtcFareBreakdown[];
  priceFare: number;
  isRefundable: string;
  airplaneModel: string;
  allowedBaggage: string;
  fareClass: string
}


export interface FlightRouteProps {
  originCity: string;
  destinationCity: string;
  startTime: { year: number; month: number; monthName: string; day: number; hours: number; minutes: number; formattedDate: string; formattedTime: string; persianDate: string; persianTime: string; };
  endTime: { year: number; month: number; monthName: string; day: number; hours: number; minutes: number; formattedDate: string; formattedTime: string; persianDate: string; persianTime: string; };
  estimatedTime: string;
}

export interface Airline {
  iata: string;
  name: string;
  nameFa: string;
}

export interface Airport {
  iata: string;
  name: string;
  nameFa: string;
  cityFa: string;
  cityId: string;
  countryCode: string;
  countryFa: string;
  latitude: string;
  longitude: string;
}

export interface AdditionalData {
  airlines: Airline[];
  airports: Airport[];
}

// Define types for the air itinerary pricing info

export interface TotalFare {
  totalService: number;
  totalFare: number;
  grandTotalWithoutDiscount: number;
  discountAmount: number | null;
  totalVat: number;
  totalTax: number;
  totalServiceTax: number;
  totalCommission: number;
}

export interface PassengerFare {
  baseFare: number;
  totalFare: number;
  serviceTax: number;
  taxes: any[]; // Specify a more precise type if needed
  total: number;
  tax: number;
  vat: number;
  baseFareWithMarkup: number;
  totalFareWithMarkupAndVat: number;
  commission: number;
  priceCitizen: number;
}

export interface PtcFareBreakdown {
  passengerFare: PassengerFare;
  passengerTypeQuantity: {
    passengerType: string;
    quantity: number;
  };
}

export interface AirItineraryPricingInfo {
  fareType: string;
  itinTotalFare: TotalFare;
  ptcFareBreakdown: PtcFareBreakdown[];
  fareInfoes: any[]; // Specify a more precise type if needed
}

export interface OperatingAirline {
  code: string;
  flightNumber: string | number;
  equipment: string;
  equipmentName: string | null;
}

export interface FlightSegment {
  departureDateTime: string;
  arrivalDateTime: string;
  stopQuantity: number;
  flightNumber: string | number;
  resBookDesigCode: string;
  journeyDuration: string;
  journeyDurationPerMinute: number;
  connectionTimePerMinute: number;
  departureAirportLocationCode: string;
  arrivalAirportLocationCode: string;
  marketingAirlineCode: string;
  cabinClassCode: string;
  operatingAirline: OperatingAirline;
  seatsRemaining: number;
  isCharter: boolean;
  isReturn: boolean;
  baggage: string;
  technicalStops: any[]; // Specify a more precise type if needed
}

export interface OriginDestinationOption {
  journeyDurationPerMinute: number;
  connectionTimePerMinute: number;
  flightSegments: FlightSegment[];
}


export interface PricedItinerary {
  passportMandatoryType: string;
  domesticCountryCode: string | null;
  isPassportMandatory: boolean;
  isDestinationAddressMandatory: boolean;
  isPassportIssueDateMandatory: boolean;
  directionInd: number;
  refundMethod: string;
  validatingAirlineCode: string;
  fareSourceCode: string;
  hasFareFamilies: boolean;
  airItineraryPricingInfo: AirItineraryPricingInfo;
  originDestinationOptions: OriginDestinationOption[];
  featured: any; // Specify a more precise type if needed
  bestExperienceIndex: number;
  isCharter: boolean;
  isSystem: boolean;
  isInstance: boolean;
  isOffer: boolean;
  isSeatServiceMandatory: boolean;
  isMealServiceMandatory: boolean;
}

export interface totalData {
  searchId: number;
  pricedItineraries: PricedItinerary[];
  additionalData: AdditionalData;
}

export interface FlightExtraDetailsProps {
  flightId: string | number;
  airlineName: string;
  flightRouteProps: FlightRouteProps;
  isCharter: boolean;
  classType: string;
  pricingBreakdownPerPassenger: PtcFareBreakdown[];
  priceFare: number;
  isRefundable: string;
  airplaneModel: string;
  allowedBaggage: string;
  fareClass: string;
}

export  interface DetailTabProps extends FlightRouteProps {
  airlineName: string;
  originCityAirportName: string
  destinationCityAirportName: string
  isCharter: boolean
  classType: string
  pricingBreakdownPerPassenger: PtcFareBreakdown[]
  priceFare: number
  isRefundable: string
  airplaneModel: string
  allowedBaggage: string
  fareClass: string
}


export interface FlightDetailedInfoProps {
  airlineName: string;
  originCity: string;
  destinationCity: string;
  startTime:  { year: number; month: number; monthName: string; day: number; hours: number; minutes: number; formattedDate: string; formattedTime: string; persianDate: string; persianTime: string; };
  endTime:  { year: number; month: number; monthName: string; day: number; hours: number; minutes: number; formattedDate: string; formattedTime: string; persianDate: string; persianTime: string; };
  startDate: string;
  endDate: string;
  originAirport: string;
  destinationAirport: string;
  flightDuration: string;
  flightType: string;
  isRefundable: string;
  airplaneModel: string;
  allowedBaggage: string;
  flightClass: string;
  fareClass: string;
}
