import React from "react";
import styled from "@emotion/styled";
import { TableHeader, TableColumn } from "../../../components/Table";
import Text from "../../../components/Text";

const TableMerchantHeader = styled(TableHeader)(
  ({ theme }) => `
    display: none;

    @media (min-width: ${theme.breakpoints.lg}) {
      display: grid;
      grid-template-areas: "avatar name category transactions actions";
      grid-template-columns: 50px 1fr 1fr 1fr 60px;
      padding: ${theme.spacings.md};
    }
  `
);

const MerchantListHeader: React.FC = () => (
  <TableMerchantHeader>
    <TableColumn gridArea="avatar" />
    <TableColumn gridArea="name">
      <Text bold fontSize="xs">
        Name
      </Text>
    </TableColumn>
    <TableColumn gridArea="category">
      <Text bold fontSize="xs">
        Category
      </Text>
    </TableColumn>
    <TableColumn gridArea="transactions">
      <Text bold fontSize="xs">
        Total
      </Text>
    </TableColumn>
    <TableColumn gridArea="actions" />
  </TableMerchantHeader>
);

export default MerchantListHeader;
