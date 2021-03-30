import React from "react";

type CurrencyProps = {
  children: number;
};

const Currency: React.FC<CurrencyProps> = ({ children }) => {
  const formattedValue = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(children);

  return <>{formattedValue}</>;
};

export default Currency;
