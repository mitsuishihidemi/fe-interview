import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

export default Container;
