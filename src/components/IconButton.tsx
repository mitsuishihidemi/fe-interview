import React from "react";
import styled from "@emotion/styled";

const Button = styled.button(
  ({ theme, disabled }) => `
    background-color: ${theme.colors.transparent};
    border: 0;
    color: ${disabled ? theme.colors.grey : theme.colors.black};
    cursor: pointer;
    line-height: 0;    
    padding: 0;
  `
);

type ReactButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type IconButtonProps = {
  icon: React.ComponentType;
  ariaLabel?: string;
  disabled?: boolean;
};

const IconButton: React.FC<IconButtonProps & ReactButtonProps> = ({
  icon: Icon,
  ariaLabel,
  ...props
}) => (
  <Button {...props}>
    <Icon aria-label={ariaLabel} />
  </Button>
);

export default IconButton;
