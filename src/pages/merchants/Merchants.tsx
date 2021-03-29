import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectMerchantsFilteredByBill } from "../../features/merchants/merchantSelectors";
import { FilterContext } from "./FilterProvider";
import MerchantList from "./MerchantList";
import NotFound from "./NotFound";

const Merchants: React.FC = () => {
  const { isBill } = useContext(FilterContext);

  const merchants = useSelector((state: RootState) =>
    selectMerchantsFilteredByBill(state, isBill)
  );

  return merchants.length ? (
    <MerchantList merchants={merchants} />
  ) : (
    <NotFound />
  );
};

export default Merchants;
