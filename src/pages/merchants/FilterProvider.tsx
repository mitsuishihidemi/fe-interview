import React, { useState } from "react";

export interface FilterContextInterface {
  isBill: boolean;
  setIsBill: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterContext = React.createContext<FilterContextInterface>({
  isBill: true,
  setIsBill: () => {},
});

const FilterProvider: React.FC = ({ children }) => {
  const [isBill, setIsBill] = useState(true);

  return (
    <FilterContext.Provider value={{ isBill, setIsBill }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
