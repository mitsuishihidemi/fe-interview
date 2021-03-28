import styled from "@emotion/styled";

export const TabContainer = styled.div``;

interface TabInterface {
  selected?: boolean;
}

export const Tab = styled.button<TabInterface>`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  border-width: 0;
  margin-right: 0.5rem;
  ${({ selected, theme }) => {
    if (selected) {
      return `
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};                
      `;
    }

    return `
      color: ${theme.colors.black};
      background-color: ${theme.colors.transparent};      
    `;
  }};
`;
