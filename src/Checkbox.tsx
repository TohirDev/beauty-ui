import styled, { CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";

interface ICheckboxProps {
  sx?: CSSProp;
}

const StyledCheckbox = styled.input<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;
const styles = {
  height: "1rem", // h-4
  width: "1rem", // w-4
  flexShrink: 0, // shrink-0
  borderRadius: "0.125rem", // rounded-sm
  borderWidth: "1px", // border
  borderColor: "#007BFF", // var(--primary)
  outline: "none",
  cursor: "pointer",
  ":focus-visible": {
    ring: "2px", // focus-visible:ring-2
    ringColor: "#00FF00", // var(--ring)
    ringOffsetWidth: "2px", // focus-visible:ring-offset-2
    ringOffsetColor: "#F8F9FA", // var(--ring-offset-background)
  },
  ":disabled": {
    cursor: "not-allowed", // disabled:cursor-not-allowed
    opacity: 0.5, // disabled:opacity-50
  },
  '&[data-state="checked"]': {
    backgroundColor: "#007BFF", // var(--primary)
    color: "#FFFFFF", // var(--primary-foreground)
    cursor: "pointer",
  },
};
export const Checkbox: React.FC<ICheckboxProps> = ({ sx, ...props }) => {
  return (
    <StyledCheckbox sx={{ ...styles, ...(sx as CSSObject) }} {...props} />
  );
};
