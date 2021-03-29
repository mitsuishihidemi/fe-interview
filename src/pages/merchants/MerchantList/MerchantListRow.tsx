import React, { useState } from "react";
import styled from "@emotion/styled";
import Avatar from "../../../components/Avatar";
import Text from "../../../components/Text";
import Space from "../../../components/Space";
import IconButton from "../../../components/IconButton";
import IconDelete from "../../../icons/DeleteIcon";
import IconInfo from "../../../icons/InfoIcon";
import { Merchant } from "../../../types/merchant";
import { getTotalTransacionsByMerchant } from "../../../features/merchants/merchantUtils";
import { TableRow, TableColumn } from "../../../components/Table";
import TransactionList from "./TransactionList";
import ToggleBillButton from "./ToggleBillButton";

const TableMerchantRow = styled(TableRow)(
  ({ theme }) => `
    grid-template-areas:
      'avatar  name     transactions actions'
      'avatar  category transactions actions'
      'details details  details      details';    
    grid-template-columns: 50px auto 60px 60px;    
    padding: ${theme.spacings.md};

    @media (min-width: ${theme.breakpoints.lg}) {      
      grid-template-areas: 
        'avatar  name    category transactions actions'
        'details details details  details      details';
      grid-template-columns: 50px 1fr 1fr 1fr 60px;    
    } 
  `
);

type MerchantListRowProps = {
  merchant: Merchant;
};

const MerchantListRow: React.FC<MerchantListRowProps> = ({ merchant }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <TableMerchantRow>
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
        <Text bold>${getTotalTransacionsByMerchant(merchant)}</Text>
      </TableColumn>
      <TableColumn gridArea="actions">
        <IconButton
          title="See transactions"
          aria-label="See transactions"
          icon={IconInfo}
          onClick={() => setShowDetails(!showDetails)}
        />
        <Space margin="0 sm 0 0" />
        <ToggleBillButton merchant={merchant} />
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
