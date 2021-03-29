import React from "react";
import Avatar from "../../../components/Avatar";
import Text from "../../../components/Text";
import Space from "../../../components/Space";
import IconDelete from "../../../icons/IconDelete";
import IconInfo from "../../../icons/IconInfo";
import { Merchant } from "../../../types/merchant";
import { getTotalTransacionsByMerchant } from "../../../features/merchants/merchantUtils";
import { GridContainer, GridItem } from "./index.styles";

type MerchantListRowProps = {
  merchant: Merchant;
};

const MerchantListRow: React.FC<MerchantListRowProps> = ({ merchant }) => (
  <GridContainer>
    <GridItem gridArea="avatar">
      <Avatar
        alt={`${merchant.name} icon`}
        src={merchant.iconUrl}
        width="40rem"
        height="40rem"
      />
    </GridItem>
    <GridItem gridArea="name">
      <Text bold>{merchant.name}</Text>
    </GridItem>
    <GridItem gridArea="category">
      <Text>{merchant.category}</Text>
    </GridItem>
    <GridItem gridArea="transactions">
      <Text bold>$ {getTotalTransacionsByMerchant(merchant)}</Text>
    </GridItem>
    <GridItem gridArea="actions">
      <IconInfo />
      <Space margin="0 sm 0 0" />
      <IconDelete />
    </GridItem>
  </GridContainer>
);

export default MerchantListRow;
