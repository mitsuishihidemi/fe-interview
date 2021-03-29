import React from "react";
import { GridContainerHeader, GridItem } from "./index.styles";
import Text from "../../../components/Text";

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

export default MerchantListHeader;
