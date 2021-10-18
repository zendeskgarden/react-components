import { createContext, useContext } from 'react';

export const SheetContext = createContext(undefined);

export const useSheetContext = () => {
    const context = useContext(SheetContext);
    if (context === undefined) {
        throw new Error(
          "useSheetContext must be used within a SheetContext.Provider"
        );
    }

    return context;
}