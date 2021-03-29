import styled from "@emotion/styled";
import Space, { SpaceProps } from "./Space";

type TextProps = {
  display?: string;
  fontSize?: "xs" | "sm" | "md" | "lg";
  bold?: boolean;
  textAlign?: "center" | "right" | "left";
};

const Text = styled(Space)<TextProps & SpaceProps>(
  ({
    theme,
    fontSize = "sm",
    bold = false,
    display = "block",
    textAlign = "left",
  }) => `
    width: inherit;
    display: ${display};
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.normal};
    text-align: ${textAlign};
  `
);

export default Text;
