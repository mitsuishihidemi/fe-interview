import React from "react";
import styled from "@emotion/styled";

const Button = styled.button(
  ({ theme }) => `
    cursor: pointer;
    line-height: 0;    
    padding: 0;
    border: 0;
    background-color: ${theme.colors.transparent};
  `
);

type ReactButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type IconButtonProps = {
  icon: React.ComponentType;
};

const IconButton: React.FC<IconButtonProps & ReactButtonProps> = ({
  icon: Icon,
  ...props
}) => (
  <Button {...props}>
    <Icon />
  </Button>
);

export default IconButton;
