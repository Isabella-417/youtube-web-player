import { createContext, useState } from "react";
import { orderSearchedData } from "../components/services/youtube";
import testData from "../assets/data/testData.json";

const initialData = {
  playlist: orderSearchedData(testData),
};

export const Context = createContext(initialData);

export const Provider = ({ children }) => {
  const [video, setVideo] = useState(initialData);

  return (
    <Context.Provider value={{ video, setVideo }}>{children}</Context.Provider>
  );
};
