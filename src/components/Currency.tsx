import React from "react";

type CurrencyProps = {
  children: number;
};

const Currency: React.FC<CurrencyProps> = ({ children }) => {
  const language = process.env.REACT_APP_LANGUAGE;
  const currency = process.env.REACT_APP_CURRENCY;

  const formattedValue = new Intl.NumberFormat(language, {
    style: "currency",
    currency,
  }).format(children);

  return <>{formattedValue}</>;
};

export default Currency;
