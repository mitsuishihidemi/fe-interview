import styled from "@emotion/styled";
import Image, { ImageProps } from "./Image";

const Avatar = styled(Image)<ImageProps>(
  ({ theme }) => `
    border-radius: ${theme.borderRadius.rounded};
    border: ${theme.border};
    box-sizing: border-box;
  `
);

export default Avatar;
