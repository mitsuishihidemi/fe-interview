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
};

const Space = styled.div<SpaceProps>(
  ({ theme, margin = "0", padding = "0" }) => `
  display: inline-block;
  margin: ${replaceSpacing(margin, theme)};
  padding: ${replaceSpacing(padding, theme)};`
);

export default Space;
