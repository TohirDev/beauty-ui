import styled, { css, CSSObject, CSSProp } from "styled-components";
import React, { useState } from "react";

interface IHoverCardProps {
  sx?: CSSProp;
  children: React.ReactNode;
}

const StyledHoverCard = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
`;

const StyledHoverCardTrigger = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
`;

export const HoverCard: React.FC<IHoverCardProps> = ({ sx, children }) => {
  return <StyledHoverCard sx={sx}>{children}</StyledHoverCard>;
};

export const HoverCardTrigger: React.FC<IHoverCardProps> = ({
  sx,
  children,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <StyledHoverCardTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ ...(sx as CSSObject) }}
      >
        {children}
      </StyledHoverCardTrigger>
      {isHovering && (
        <HoverCard sx={{ ...(sx as CSSObject) }}>{children}</HoverCard>
      )}
    </>
  );
};
