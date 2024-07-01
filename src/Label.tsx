import styled, { CSSObject, CSSProp } from "styled-components";
import { convertToCss } from "./utils/styleUtils";
import React from "react";

interface ILabelProps {
  sx?: CSSProp;
}

const StyledLabel = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

export const Label: React.FC<ILabelProps> = ({ sx, ...props }) => {
  return <StyledLabel sx={sx} {...props} />;
};
