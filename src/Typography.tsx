import React from "react";
import styled, { CSSObject, CSSProp, css } from "styled-components";
import { convertToCss } from "./utils/styleUtils";

interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  sx?: CSSProp | CSSObject;
}

const headingStyles = {
  lg: css`
    font-size: 24px;
    font-weight: bold;
  `,
  md: css`
    font-size: 20px;
    font-weight: bold;
  `,
  sm: css`
    font-size: 16px;
    font-weight: bold;
  `,
  xs: css`
    font-size: 12px;
    font-weight: bold;
  `,
};

const StyledHeading = styled.div<{
  variant: TypographyProps["variant"];
  sx?: CSSProp;
}>`
  padding: 10px 20px;
  ${({ variant }) => headingStyles[variant]}
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  sx,
  ...props
}) => {
  return (
    <StyledHeading variant={variant} sx={sx} {...props}>
      {children}
    </StyledHeading>
  );
};
