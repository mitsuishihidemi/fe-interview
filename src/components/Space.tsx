import styled from "@emotion/styled";
import { ThemeInterface } from "./theme/theme";

const replaceSpacing = (spacing: string, theme: ThemeInterface) =>
  spacing
    .replace(/sm/g, theme.spacings.sm)
    .replace(/md/g, theme.spacings.md)
    .replace(/lg/g, theme.spacings.lg);

export type SpaceProps = {
  margin?: string;
  padding?: string;
  fullWidth?: boolean;
};

// I made a simplified version of Space because is a MVP, otherwise
// I would include other attributes to make it more flexible
const Space = styled.div<SpaceProps>(
  ({ theme, margin = "0", padding = "0", fullWidth }) => `
    box-sizing: border-box;
    display: inline-block;
    margin: ${replaceSpacing(margin, theme)};
    padding: ${replaceSpacing(padding, theme)};    
    width: ${fullWidth ? "100%" : "inherit"};    
  `
);

export default Space;
