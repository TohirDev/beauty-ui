import styled, { CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";

interface InputProps {
  sx?: CSSProp;
}

const StyledInput = styled.input<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;
const styleObject: CSSObject = {
  display: "flex",
  height: "2.5rem",
  width: "100%",
  borderRadius: "0.375rem",
  border: "1px solid var(--input)",
  backgroundColor: "var(--background)",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  fontSize: "0.875rem",
  ringOffsetColor: "var(--background)",

  "&::file-selector-button": {
    border: "0",
    backgroundColor: "transparent",
    fontSize: "0.875rem",
    fontWeight: 500,
  },

  "::placeholder": {
    color: "var(--muted-foreground)",
  },

  "&:focus-visible": {
    outline: "none",
    ring: "2",
    ringColor: "var(--ring)",
    ringOffsetWidth: "2px",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
};

export const Input: React.FC<InputProps> = ({ sx }) => {
  return <StyledInput sx={{ ...styleObject, ...(sx as CSSObject) }} />;
};
