import { createContext, ReactNode, useContext } from "react";
import { doctors } from "../assets/Information";


interface AppContextType {
  doctors: typeof doctors;
  currencySymbol: string; 
}

const AppContext = createContext<AppContextType | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

function AppContextProvider({ children }: AppContextProviderProps) {
  const currencySymbol: string = "$";

  return (
    <AppContext.Provider value={{ doctors, currencySymbol }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
}

export { useAppContext, AppContextProvider };
