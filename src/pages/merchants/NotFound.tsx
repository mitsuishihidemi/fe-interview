import React from "react";
import styled from "@emotion/styled";
import Text from "../../components/Text";

const Wrapper = styled.div(
  ({ theme }) => `  
    background-color: ${theme.colors.lightGrey};
    border-radius: ${theme.borderRadius.default};
    border: ${theme.border};
    padding: ${theme.spacings.lg};
    text-align: center;
  `
);

const NotFound: React.FC = () => (
  <Wrapper>
    <Text as="h2" fontSize="md">
      No Merchants found{" "}
      <span role="img" aria-label="Crying Face">
        😢
      </span>
    </Text>
  </Wrapper>
);

export default NotFound;
