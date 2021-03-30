import React, { useContext } from "react";
import { FilterContext } from "./FilterProvider";
import { Tab, TabContainer } from "../../components/Tab";

const FilterSelector: React.FC = () => {
  const { isBill, setIsBill } = useContext(FilterContext);

  return (
    <TabContainer>
      <Tab
        data-test-id="bills.tab"
        selected={isBill}
        onClick={() => setIsBill(true)}
      >
        Bills
      </Tab>
      <Tab
        data-test-id="potential-bills.tab"
        selected={!isBill}
        onClick={() => setIsBill(false)}
      >
        Potential Bills
      </Tab>
    </TabContainer>
  );
};

export default FilterSelector;
