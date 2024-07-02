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

const styles: CSSObject = {
  appearance: "none",
  width: "20px",
  height: "20px",
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "3px",
  cursor: "pointer",
  position: "relative",
  "&:checked": {
    backgroundColor: "black",
    borderColor: "black",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "10px",
    height: "10px",
    backgroundColor: "white",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "opacity 0.2s",
  },
  "&:checked::after": {
    opacity: 1,
  },
};

export const Checkbox: React.FC<ICheckboxProps> = ({ sx, ...props }) => {
  return (
    <StyledCheckbox
      type="checkbox"
      sx={{ ...styles, ...(sx as CSSObject) }}
      {...props}
    />
  );
};
