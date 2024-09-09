'use client';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [extraDetailsToggle, setExtraDetailsToggle] = useState({});

    const toggleExtraDetails = (id) => {
        setExtraDetailsToggle((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const value = {
        extraDetailsToggle,
        toggleExtraDetails,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};