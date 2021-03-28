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
    cursor: pointer;
    font-size: ${theme.fontSizes.sm};
    padding: ${`${theme.spacings.sm} ${theme.spacings.md}`};
    box-sizing: border-box;
    border-radius: ${theme.borderRadius.default};
    transition: all 0.2s ease;
    border-width: 0;
    margin-right: ${theme.spacings.md};
    ${selectedProps}`;
});
