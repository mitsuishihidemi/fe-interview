import React, { useState } from "react";
import styled from "@emotion/styled";
import Avatar from "../../../components/Avatar";
import Text from "../../../components/Text";
import Space from "../../../components/Space";
import IconButton from "../../../components/IconButton";
import IconInfo from "../../../icons/InfoIcon";
import Currency from "../../../components/Currency";
import { Merchant } from "../../../types/merchant";
import { getTotalTransacionsByMerchant } from "../../../features/merchants/merchantUtils";
import { TableRow, TableColumn } from "../../../components/Table";
import TransactionList from "./TransactionList";
import ToggleBillButton from "./ToggleBillButton";

const TableMerchantRow = styled(TableRow)(
  ({ theme }) => `
    grid-template-areas:
      'avatar  name         actions'
      'avatar  category     actions'
      'avatar  transactions actions'
      'details details      details';    
    grid-template-columns: 50px auto 60px;    
    padding: ${theme.spacings.md};

    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-areas:
        'avatar  name     transactions actions'
        'avatar  category transactions actions'        
        'details details  details      details';    
      grid-template-columns: 50px 1fr 1fr 60px;    
    }

    @media (min-width: ${theme.breakpoints.lg}) {      
      grid-template-areas: 
        'avatar  name    category transactions actions'
        'details details details  details      details';
      grid-template-columns: 50px 1fr 1fr 1fr 60px;    
    } 
  `
);

const TransactionText = styled(Text)(
  ({ theme }) => `
    margin-top: ${theme.spacings.md};
    font-size: ${theme.fontSizes.md};

    @media (min-width: ${theme.breakpoints.md}) {
      margin-top: 0;
      font-size: ${theme.fontSizes.sm};
    }    
  `
);

type MerchantListRowProps = {
  merchant: Merchant;
};

const MerchantListRow: React.FC<MerchantListRowProps> = ({ merchant }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <TableMerchantRow data-test-id="merchant.row" data-id={merchant.id}>
      <TableColumn gridArea="avatar">
        <Avatar
          alt={`${merchant.name} icon`}
          src={merchant.iconUrl}
          width="50px"
          height="50px"
        />
      </TableColumn>
      <TableColumn gridArea="name">
        <Text bold>{merchant.name}</Text>
      </TableColumn>
      <TableColumn gridArea="category">
        <Text>{merchant.category}</Text>
      </TableColumn>
      <TableColumn gridArea="transactions">
        <TransactionText bold>
          <Currency>{getTotalTransacionsByMerchant(merchant)}</Currency>
        </TransactionText>
      </TableColumn>
      <TableColumn gridArea="actions">
        <Text textAlign="right" as="div">
          <IconButton
            data-test-id="see-transitions.cta"
            title="See transactions"
            aria-label="See transactions"
            icon={IconInfo}
            onClick={() => setShowDetails(!showDetails)}
          />
          <Space margin="0 sm 0 0" />
          <ToggleBillButton merchant={merchant} />
        </Text>
      </TableColumn>
      {showDetails && (
        <TableColumn gridArea="details">
          <Space margin="0 0 md" />
          <TransactionList transactions={merchant.transactions} />
        </TableColumn>
      )}
    </TableMerchantRow>
  );
};

export default MerchantListRow;
