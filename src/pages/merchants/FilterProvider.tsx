import React, { useState } from "react";

interface ContextInterface {
  isBill: boolean;
  setIsBill: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextInteface: ContextInterface = {
  isBill: true,
  setIsBill: () => {},
};

export const FilterContext = React.createContext<ContextInterface>(
  defaultContextInteface
);

const FilterProvider: React.FunctionComponent = ({ children }) => {
  const [isBill, setIsBill] = useState(true);

  return (
    <FilterContext.Provider value={{ isBill, setIsBill }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
