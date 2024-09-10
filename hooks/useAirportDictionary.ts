import { useMemo } from 'react';

interface Airport {
    iata: string;
    cityFa: string;
    name: string;
}

interface AdditionalData {
    airports?: Airport[];
}

const useAirportDictionary = (additionalData: AdditionalData) => {
    return useMemo(() => {
        if (!additionalData.airports) {
            return {};
        }

        return additionalData.airports.reduce((acc, airport) => {
            acc[airport.iata] = {
                cityFa: airport.cityFa,
                name: airport.name
            };
            return acc;
        }, {} as Record<string, { cityFa: string; name: string }>);
    }, [additionalData.airports]);
};

export default useAirportDictionary;
