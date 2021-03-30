import React from "react";
import { useSelector } from "react-redux";
import MessageBox from "../../components/MessageBox";
import Text from "../../components/Text";
import {
  merchantSelectors,
  selectIsMerchantsPending,
} from "../../features/merchants/merchantSelectors";

const Loader: React.FC = ({ children }) => {
  const merchantTotal = useSelector(merchantSelectors.selectTotal);
  const merchantPending = useSelector(selectIsMerchantsPending);

  if (merchantTotal === 0 && merchantPending) {
    return (
      <MessageBox>
        <Text fontSize="md" bold>
          Loading...{" "}
          <span role="img" aria-label="Sleeping face">
            😴
          </span>
        </Text>
      </MessageBox>
    );
  }

  return <>{children}</>;
};

export default Loader;
