import styled from "@emotion/styled";
import Space, { SpaceProps } from "./Space";

type TextProps = {
  display?: string;
  fontSize?: "xs" | "sm" | "md" | "lg";
  bold?: boolean;
};

const Text = styled(Space)<TextProps & SpaceProps>(
  ({ theme, fontSize = "sm", bold = false, display = "block" }) => `
  display: ${display};
  font-size: ${theme.fontSizes[fontSize]};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.normal};`
);

export default Text;
