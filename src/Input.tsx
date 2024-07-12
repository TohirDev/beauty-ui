import React from "react";
import styled, { css, CSSObject, CSSProp } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sx?: CSSProp;
}

const StyledInput = styled.input<{ sx?: CSSProp }>`
  ${({ sx }) => sx && css(sx as CSSObject)}

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
  height: "2.5rem",
  width: "100%",
  borderRadius: "0.375rem",
  border: "1px solid #E4E4E7",
  backgroundColor: "#FFFFFF",
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  ringOffsetColor: "#FFFFFF",
  "&::placeholder": {
    color: "#6B7280",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.5",
  },
};

export const Input: React.FC<InputProps> = ({ sx, ...props }) => {
  return (
    <StyledInput sx={{ ...style, ...(sx as CSSObject) }} {...props} />
  );
};
