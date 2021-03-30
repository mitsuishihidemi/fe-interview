import React from "react";
import { LANGUAGE, CURRENCY } from "../constants";

type CurrencyProps = {
  children: number;
};

const Currency: React.FC<CurrencyProps> = ({ children }) => {
  const formattedValue = new Intl.NumberFormat(LANGUAGE, {
    style: "currency",
    currency: CURRENCY,
  }).format(children);

  return <>{formattedValue}</>;
};

export default Currency;
