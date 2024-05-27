import React from "react";
import styled, { css, CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "text" | "contained" | "outlined";
  children?: React.ReactNode;
  sx?: CSSProp | CSSObject;
}

const buttonStyles = {
  text: css`
    background: none;
    border: none;
    color: blue;
  `,
  contained: css`
    appearance: button;
    backface-visibility: hidden;
    background-color: #405cf5;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", Ubuntu, sans-serif;
    font-size: 100%;
    height: 44px;
    line-height: 1.15;
    margin: 12px 0 0;
    outline: none;
    overflow: hidden;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition: all 0.2s, box-shadow 0.08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:disabled {
      cursor: default;
    }

    &:focus {
      box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
        rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
        rgba(50, 151, 211, 0.3) 0 0 0 4px;
    }
    &:active {
      transform: scale(0.98);
    }
  `,
  outlined: css`
    background: none;
    border: 2px solid blue;
    color: blue;
  `,
};

const StyledButton = styled.button<{
  variant: "text" | "contained" | "outlined";
  sx?: CSSProp;
}>`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  ${({ variant }) => buttonStyles[variant]}
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

export const Button: React.FC<ButtonProps> = ({
  variant,
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
