import { useMemo } from 'react';

interface Airline {
  iata: string;
  nameFa: string;
}

interface AdditionalData {
  airlines?: Airline[];
}

const useAirlineDictionary = (additionalData: AdditionalData) => {
  return useMemo(() => {
    if (!additionalData.airlines) {
      return {};
    }

    return additionalData.airlines.reduce((acc, airline) => {
      acc[airline.iata] = airline.nameFa;
      return acc;
    }, {} as Record<string, string>);
  }, [additionalData.airlines]);
};

export default useAirlineDictionary;