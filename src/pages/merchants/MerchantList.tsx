import React, { useContext } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectMerchantsFilteredByBill } from "../../features/merchants/merchantSelectors";
import { FilterContext } from "./FilterProvider";
import Avatar from "../../components/Avatar";
import Text from "../../components/Text";
import Space from "../../components/Space";
import IconDelete from "../../icons/IconDelete";
import IconInfo from "../../icons/IconInfo";
import { Merchant } from "../../features/merchants/merchant";

const Wrapper = styled.div(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.grey};
    border-radius: ${theme.borderRadius.default};
    overflow: hidden;`
);

const GridContainer = styled.div(
  ({ theme }) => `  
    transition: background-color 0.3s ease;  
    border-bottom: 1px solid ${theme.colors.grey};
    box-sizing: border-box;        
    padding: ${theme.spacings.md};
    display: grid;    
    align-items: center;
    grid-column-gap: 1rem;
    grid-template-columns: 50px auto 100px 60px;    
    grid-template-areas:
      'avatar  name     transactions actions'
      'avatar  category transactions actions'
      'details details  details      details';    

    :hover {      
      background-color: ${theme.colors.lightGrey};      
    }

    :last-child {
      border-bottom-width: 0;
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 50px 1fr 1fr 1fr 60px;    
      grid-template-areas: 
        'avatar  name    category transactions actions'
        'details details details  details      details';
    }`
);

const GridContainerHeader = styled.div(
  ({ theme }) => `
    display: none;

    @media (min-width: ${theme.breakpoints.lg}) {
      border-bottom: 1px solid ${theme.colors.grey};
      padding: ${theme.spacings.md};
      display: grid;    
      align-items: center;
      grid-column-gap: 1rem;      
      grid-template-columns: 50px 1fr 1fr 1fr 60px;    
      grid-template-areas: 'avatar name category transactions actions';
    }
    `
);

type GridItemProps = {
  gridArea: string;
};

const GridItem = styled.div<GridItemProps>(
  ({ gridArea }) => `    
    grid-area: ${gridArea};
  `
);

const MerchantListHeader: React.FC = () => (
  <GridContainerHeader>
    <GridItem gridArea="avatar" />
    <GridItem gridArea="name">
      <Text bold fontSize="xs">
        Name
      </Text>
    </GridItem>
    <GridItem gridArea="category">
      <Text bold fontSize="xs">
        Category
      </Text>
    </GridItem>
    <GridItem gridArea="transactions">
      <Text bold fontSize="xs">
        Total
      </Text>
    </GridItem>
    <GridItem gridArea="actions" />
  </GridContainerHeader>
);

type MerchantListBodyProps = {
  merchant: Merchant;
};

const MerchantListBody: React.FC<MerchantListBodyProps> = ({ merchant }) => (
  <GridContainer>
    <GridItem gridArea="avatar">
      <Avatar
        alt={`${merchant.name} icon`}
        src={merchant.iconUrl}
        width="50px"
        height="50px"
      />
    </GridItem>
    <GridItem gridArea="name">
      <Text bold>{merchant.name}</Text>
    </GridItem>
    <GridItem gridArea="category">
      <Text>{merchant.category}</Text>
    </GridItem>
    <GridItem gridArea="transactions">
      <Text bold>
        $ {merchant.transactions.reduce((acc, t) => acc + t.amount, 0)}
      </Text>
    </GridItem>
    <GridItem gridArea="actions">
      <IconInfo />
      <Space margin="0 sm 0 0" />
      <IconDelete />
    </GridItem>
  </GridContainer>
);

const MerchantList: React.FC = () => {
  const { isBill } = useContext(FilterContext);

  const merchants = useSelector((state: RootState) =>
    selectMerchantsFilteredByBill(state, isBill)
  );

  return (
    <Wrapper>
      <MerchantListHeader />
      {merchants.map((merchant) => (
        <MerchantListBody key={merchant.id} merchant={merchant} />
      ))}
    </Wrapper>
  );
};

export default MerchantList;
