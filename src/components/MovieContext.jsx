import { createContext, useState, useContext } from "react";

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [selectedBuyTicket, setSelectedBuyTicket] = useState(null);
  const value = [selectedBuyTicket, setSelectedBuyTicket];
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
