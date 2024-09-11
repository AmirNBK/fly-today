'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    extraDetailsToggle: Record<string, boolean>;
    toggleExtraDetails: (id: string | number) => void;
    isFilterReset : boolean
    setIsFilterReset : any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [extraDetailsToggle, setExtraDetailsToggle] = useState<Record<string, boolean>>({});
    const [isFilterReset, setIsFilterReset] = useState(false)

    const toggleExtraDetails = (id: string | number) => {
        setExtraDetailsToggle(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const value = {
        extraDetailsToggle,
        toggleExtraDetails,
        isFilterReset,
        setIsFilterReset
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
