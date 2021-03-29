import styled from "@emotion/styled";

const Container = styled.div(
  ({ theme }) => `
    box-sizing: border-box;
    padding: 0 ${theme.spacings.md};
    @media (min-width: ${theme.breakpoints.lg}) {
      margin: 0 auto;
      max-width: ${theme.containerMaxWidth};
    }
  `
);

export default Container;
