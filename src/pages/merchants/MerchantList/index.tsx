import React from "react";
import { Merchant } from "../../../types/merchant";
import { Wrapper } from "./index.styles";
import MerchantListHeader from "./MerchantListHeader";
import MerchantListRow from "./MerchantListRow";

type MerchantListProps = {
  merchants: Merchant[];
};

const MerchantList: React.FC<MerchantListProps> = ({ merchants }) => (
  <Wrapper>
    <MerchantListHeader />
    {merchants.map((merchant) => (
      <MerchantListRow key={merchant.id} merchant={merchant} />
    ))}
  </Wrapper>
);

export default MerchantList;
