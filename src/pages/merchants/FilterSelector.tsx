import React, { useContext } from "react";
import { FilterContext } from "./FilterProvider";
import { Tab, TabContainer } from "../../components/Tab";

const FilterSelector: React.FC = () => {
  const { isBill, setIsBill } = useContext(FilterContext);

  return (
    <TabContainer>
      <Tab selected={isBill} onClick={() => setIsBill(true)}>
        Bills
      </Tab>
      <Tab selected={!isBill} onClick={() => setIsBill(false)}>
        Potential Bills
      </Tab>
    </TabContainer>
  );
};

export default FilterSelector;
