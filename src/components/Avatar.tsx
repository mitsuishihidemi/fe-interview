import styled from "@emotion/styled";
import Image, { ImageProps } from "./Image";

const Avatar = styled(Image)<ImageProps>(
  ({ theme }) => `
    box-sizing: border-box;
    border: 1px solid ${theme.colors.grey};
    border-radius: ${theme.borderRadius.rounded};`
);

export default Avatar;
