import React, { createContext, useState, useContext } from 'react';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
    const [selectedRoute, setSelectedRoute] = useState('upload');

    return (
        <RouteContext.Provider value={{ selectedRoute, setSelectedRoute }}>
            {children}
        </RouteContext.Provider>
    );
};

export const useRoute = () => {
    const context = useContext(RouteContext);
    if (context === undefined) {
        throw new Error('useRoute must be used within a RouteProvider');
    }
    return context;
};