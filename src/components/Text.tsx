import styled from "@emotion/styled";

type TextProps = {
  fontSize?: "xs" | "sm" | "md" | "lg" | "xl";
  textAlign?: "center" | "right" | "left" | "inherit";
  bold?: boolean;
};

// I made a simplified version of Text because is a MVP, otherwise
// I would include other attributes to make it more flexible
const Text = styled.p<TextProps>(
  ({ theme, fontSize = "sm", bold = false, textAlign = "inherit" }) => `
    margin-top: 0;
    margin-bottom: 0;
    width: inherit;    
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.normal};
    text-align: ${textAlign};
  `
);

export default Text;
