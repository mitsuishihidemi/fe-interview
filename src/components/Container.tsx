import styled from "@emotion/styled";

const Container = styled.div(
  ({ theme }) => `
    box-sizing: border-box;
    padding: ${theme.spacings.lg} ${theme.spacings.md} 0;
    @media (min-width: ${theme.breakpoints.lg}) {
      margin: 0 auto;
      max-width: ${theme.containerMaxWidth};
    }
  `
);

export default Container;
