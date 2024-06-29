import React from "react";
import styled, { CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";

// Extend InputProps from React.InputHTMLAttributes
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sx?: CSSProp;
}

const StyledInput = styled.input<{ sx?: CSSProp }>`
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}

  ${(props) =>
    props.type === "file" &&
    `
    border: 1px solid #000;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0;
    color: #6C6C6E;
    cursor: pointer;
    &::-webkit-file-upload-button {
      background: transparent; /* Example button background color */
      color: #000; /* Example button text color */
      padding: 0.5rem 1rem; /* Example button padding */
      outline: none;
      border: none;
      cursor: pointer;
    }
  `}
`;

const style: CSSObject = {
  display: "flex",
  height: "2.5rem", // 40px
  width: "100%",
  borderRadius: "0.375rem", // medium rounded corners
  border: "1px solid #E4E4E7", // Assuming `border-input` corresponds to a CSS variable
  backgroundColor: "#FFFFFF", // Assuming `bg-background` corresponds to a CSS variable
  padding: "0.5rem 0.75rem", // 8px top/bottom and 12px left/right
  fontSize: "0.875rem", // 14px (text-sm)
  ringOffsetColor: "#FFFFFF", // Assuming `ring-offset-background` corresponds to a CSS variable
  "::placeholder": {
    // Use "::placeholder" pseudo-element
    color: "#6B7280",
  },
  ":focus-visible": {
    // Use ":focus-visible" pseudo-class
    outline: "none",
    boxShadow: "0 0 0 2px #3B82F6, 0 0 0 4px #F3F4F6", // Assuming `focus-visible:ring-2` and `focus-visible:ring-ring` corresponds to CSS variables
  },
  ":disabled": {
    // Use ":disabled" pseudo-class
    cursor: "not-allowed",
    opacity: "0.5",
  },
};

export const Input: React.FC<InputProps> = ({ sx, ...props }) => {
  return (
    <StyledInput sx={{ ...style, ...(sx as CSSObject) }} {...props} />
  );
};
