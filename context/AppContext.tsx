'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    extraDetailsToggle: Record<string, boolean>;
    toggleExtraDetails: (id: string | number) => void;
    selectedOptions: string[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
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
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleExtraDetails = (id: string | number) => {
        setExtraDetailsToggle(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const value = {
        extraDetailsToggle,
        toggleExtraDetails,
        selectedOptions,
        setSelectedOptions
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
