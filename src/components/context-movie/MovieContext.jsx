import { createContext, useState, useContext } from "react";

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [selectedBuyTicket, setSelectedBuyTicket] = useState();
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const value = [
    selectedBuyTicket,
    setSelectedBuyTicket,
    selectedShowtime,
    setSelectedShowtime,
    selectedSeats,
    setSelectedSeats,
  ];
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
