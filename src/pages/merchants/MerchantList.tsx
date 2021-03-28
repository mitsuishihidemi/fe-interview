import React, { useContext } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectMerchantsFilteredByBill } from "../../features/merchants/merchantSelectors";
import { FilterContext } from "./FilterProvider";

const GridContainer = styled.div`
  display: grid;
`;

const GridItem = styled.div``;

const MerchantList: React.FC = () => {
  const { isBill } = useContext(FilterContext);

  const merchants = useSelector((state: RootState) =>
    selectMerchantsFilteredByBill(state, isBill)
  );

  return (
    <GridContainer>
      {merchants.map((merchant) => (
        <React.Fragment key={merchant.id}>
          <GridItem>{merchant.name}</GridItem>
          <GridItem>{merchant.category}</GridItem>
        </React.Fragment>
      ))}
    </GridContainer>
  );
};

export default MerchantList;
