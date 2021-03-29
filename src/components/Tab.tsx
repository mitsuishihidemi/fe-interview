import styled from "@emotion/styled";

export const TabContainer = styled.div``;

interface TabInterface {
  selected?: boolean;
}

export const Tab = styled.button<TabInterface>(({ theme, selected }) => {
  const selectedProps = selected
    ? `
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};`
    : `
      color: ${theme.colors.black};
      background-color: ${theme.colors.transparent};`;

  return `
    border-radius: ${theme.borderRadius.default};
    border-width: 0;
    box-sizing: border-box;
    cursor: pointer;
    font-size: ${theme.fontSizes.sm};
    margin-right: ${theme.spacings.sm};
    padding: ${theme.spacings.sm} ${theme.spacings.md};
    transition: all 0.3s ease;
    ${selectedProps}
  `;
});
