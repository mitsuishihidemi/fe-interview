import React from "react";
import Text from "../../components/Text";
import MessageBox from "../../components/MessageBox";

const NotFound: React.FC = () => (
  <MessageBox data-test-id="not-found.message">
    <Text fontSize="md" bold>
      No Merchants found{" "}
      <span role="img" aria-label="Crying Face">
        😢
      </span>
    </Text>
  </MessageBox>
);

export default NotFound;
