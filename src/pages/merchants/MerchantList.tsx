import React, { useContext } from "react";
import { FilterContext } from "./FilterProvider";

const MerchantList: React.FC = () => {
  const { isBill } = useContext(FilterContext);

  return (
    <div>
      <h1>isBill: {String(isBill)}</h1>
    </div>
  );
};

export default MerchantList;
