import React from "react";
import { Merchant } from "../../../types/merchant";
import { Table } from "../../../components/Table";
import MerchantListHeader from "./MerchantListHeader";
import MerchantListRow from "./MerchantListRow";

type MerchantListProps = {
  merchants: Merchant[];
};

const MerchantList: React.FC<MerchantListProps> = ({ merchants }) => (
  <Table>
    <MerchantListHeader />
    {merchants.map((merchant) => (
      <MerchantListRow key={merchant.id} merchant={merchant} />
    ))}
  </Table>
);

export default MerchantList;
