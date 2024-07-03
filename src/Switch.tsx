import styled, { CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";

interface ISwitchProps {
  sx?: CSSProp;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledSwitch = styled.input.attrs({ type: "checkbox" })<{
  sx?: CSSProp;
  checked?: boolean;
}>`
  position: relative;
  width: 50px;
  height: 25px;
  -webkit-appearance: none;
  background: ${({ checked }) => (checked ? "black" : "white")};
  border-radius: 25px;
  cursor: pointer;
  box-shadow: ${({ checked }) =>
    checked ? "0 0 0 2px white" : "0 0 0 2px black"};
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 2.5px;
    left: ${({ checked }) => (checked ? "calc(100% - 23px)" : "2.5px")};
    width: 20px;
    height: 20px;
    background: ${({ checked }) => (checked ? "white" : "black")};
    border-radius: 50%;
    transition: left 0.3s ease-in-out, background 0.3s ease-in-out;
  }

  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

export const Switch: React.FC<ISwitchProps> = ({
  sx,
  checked,
  onChange,
  ...props
}) => {
  return (
    <StyledSwitch
      sx={{ ...(sx as CSSObject) }}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
};
