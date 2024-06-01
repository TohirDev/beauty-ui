import React from "react";
import styled, { CSSObject, CSSProp, css } from "styled-components";
import { convertToCss } from "./utils/styleUtils";

interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "large" | "small" | "muted";
  children: React.ReactNode;
  sx?: CSSProp | CSSObject;
}

const headingStyles = {
  h1: css`
    font-size: 2.25rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  `,
  h2: css`
    font-size: 1.875rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
  h3: css`
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
  h4: css`
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
  p: css`
    line-height: 1.75;
  `,
  large: css`
    font-size: 1.125rem;
    font-weight: 600;
  `,
  small: css`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
  `,
  muted: css`
    font-size: 1rem;
    color: #71717a;
  `,
};

const StyledTypography = styled.div<{
  variant: TypographyProps["variant"];
  sx?: CSSProp;
}>`
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
    <StyledTypography variant={variant} sx={sx} {...props}>
      {children}
    </StyledTypography>
  );
};
