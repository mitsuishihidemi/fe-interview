import styled from "@emotion/styled";
import { ThemeInterface } from "./theme/theme";

const replaceSpacing = (spacing: string, theme: ThemeInterface) =>
  spacing
    .replace(/sm/g, theme.fontSizes.sm)
    .replace(/md/g, theme.fontSizes.md)
    .replace(/lg/g, theme.fontSizes.lg);

export type SpaceProps = {
  margin?: string;
  padding?: string;
};

const Space = styled.div<SpaceProps>(
  ({ theme, margin = "0", padding = "0" }) => `
  margin: ${replaceSpacing(margin, theme)};
  padding: ${replaceSpacing(padding, theme)};`
);

export default Space;
