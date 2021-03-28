import React, { useContext } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectMerchantsFilteredByBill } from "../../features/merchants/merchantSelectors";
import { FilterContext } from "./FilterProvider";
import Avatar from "../../components/Avatar";
import Text from "../../components/Text";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50px auto auto;
  gap: ${({ theme }) => theme.spacings.md};
  align-items: center;
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
          <GridItem>
            <Avatar
              alt={`${merchant.name} icon`}
              src={merchant.iconUrl}
              width="50px"
              height="50px"
            />
          </GridItem>
          <GridItem>
            <Text bold>{merchant.name}</Text>
            <Text fontSize="xs">{merchant.category}</Text>
          </GridItem>
          <GridItem></GridItem>
        </React.Fragment>
      ))}
    </GridContainer>
  );
};

export default MerchantList;
