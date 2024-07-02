import styled, { CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";
import React from "react";

interface ILabelProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  sx?: CSSProp;
  children: React.ReactNode;
}

const StyledLabel = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

const styles: CSSObject = {
  color: "black",
  fontSize: "14px",
  fontWeight: "bold",
};

export const Label: React.FC<ILabelProps> = ({
  sx,
  children,
  ...props
}) => {
  return (
    <StyledLabel sx={{ ...styles, ...(sx as CSSObject) }} {...props}>
      {children}
    </StyledLabel>
  );
};
