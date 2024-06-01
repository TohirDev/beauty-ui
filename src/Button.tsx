import React from "react";
import styled, { css, CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "link" | "default" | "outlined" | "primary" | "danger";
  children?: React.ReactNode;
  sx?: CSSProp | CSSObject;
}

const buttonStyle = css`
  appearance: button;
  backface-visibility: hidden;
  border-radius: 6px;
  border-width: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-family: system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu,
    sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  text-align: center;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled:active {
    transform: none;
  }
`;

const buttonStyles = {
  link: css`
    background: none;
    border: none;
    color: #000;
    position: relative;
    &:hover::after {
      content: "";
      position: absolute;
      left: 18px;
      right: 0;
      bottom: 8px;
      border-bottom: 1px solid #000;
      width: calc(100% - 36px);
    }
  `,
  primary: css`
    ${buttonStyle}
    background-color: #1081FD;
    color: #fff;
  `,
  outlined: css`
    ${buttonStyle}
    background: none;
    border: 2px solid #18181b;
    color: #18181b;
  `,
  default: css`
    ${buttonStyle}
    background-color: #18181b;
    color: #fff;
  `,
  danger: css`
    ${buttonStyle}
    background-color: #f44336;
    color: #fff;
  `,
};

const StyledButton = styled.button<{
  variant?: "link" | "default" | "outlined" | "primary" | "danger";
  sx?: CSSProp;
}>`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  ${({ variant = "default" }) => buttonStyles[variant]}
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  sx,
  ...props
}) => {
  return (
    <StyledButton variant={variant} sx={sx} {...props}>
      {children}
    </StyledButton>
  );
};
