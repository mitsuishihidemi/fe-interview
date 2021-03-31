import React from "react";
import styled from "@emotion/styled";
import { Transaction } from "../../../types/transaction";
import Text from "../../../components/Text";
import Currency from "../../../components/Currency";
import {
  Table,
  TableHeader,
  TableRow,
  TableColumn,
} from "../../../components/Table";

const TableTransactionHeader = styled(TableHeader)(
  ({ theme }) => `
    grid-template-areas: "date amount";
    grid-template-columns: 1fr 1fr;
    padding: ${theme.spacings.sm};
  `
);

const TableTransactionRow = styled(TableRow)(
  ({ theme }) => `
    grid-template-areas: "date amount";
    grid-template-columns: 1fr 1fr;
    padding: ${theme.spacings.sm};
  `
);

type TransactionListProps = {
  transactions: Transaction[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => (
  <Table>
    <TableTransactionHeader>
      <TableColumn gridArea="date">
        <Text bold fontSize="xs">
          Date
        </Text>
      </TableColumn>
      <TableColumn gridArea="amount">
        <Text bold fontSize="xs">
          Amount
        </Text>
      </TableColumn>
    </TableTransactionHeader>
    {transactions.map((transaction) => (
      <TableTransactionRow key={transaction.id} data-testid="transaction.row">
        <TableColumn gridArea="date">
          <Text fontSize="xs">{transaction.date}</Text>
        </TableColumn>
        <TableColumn gridArea="amount">
          <Text fontSize="xs">
            <Currency>{transaction.amount}</Currency>
          </Text>
        </TableColumn>
      </TableTransactionRow>
    ))}
  </Table>
);

export default TransactionList;
