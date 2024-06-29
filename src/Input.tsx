import styled, { CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sx?: CSSProp;
}

const StyledInput = styled.input<InputProps>`
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

const styleObject: CSSObject = {
  width: "300px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  "&:disabled": {
    cursor: "not-allowed",
  },
};

export const Input: React.FC<InputProps> = ({ sx, ...props }) => {
  return (
    <StyledInput
      sx={{ ...styleObject, ...(sx as CSSObject) }}
      {...props}
    />
  );
};
