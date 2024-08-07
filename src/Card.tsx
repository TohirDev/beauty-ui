import styled, {
  css,
  CSSObject,
  CSSProp,
  CSSProperties,
} from "styled-components";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  sx?: CSSProp | CSSObject;
}

const StyledCard = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
`;

const cardStyle: CSSProperties = {
  borderRadius: "0.5rem",
  border: "1px solid #E4E4E7",
  backgroundColor: "#fff",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  width: "fit-content",
  padding: "1rem 1.5rem",
};

export const Card: React.FC<CardProps> = ({ children, sx }) => {
  const combinedStyles = { ...cardStyle, ...(sx as CSSObject) };
  return <StyledCard sx={combinedStyles}>{children}</StyledCard>;
};

const cardHeaderStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginTop: "0.375rem", // 1.5 * 0.25rem = 0.375rem
};

const SytledCardHeader = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
`;

export const CardHeader: React.FC<CardProps> = ({ children, sx }) => {
  const combinedStyles = { ...cardHeaderStyles, ...(sx as CSSObject) };
  return (
    <SytledCardHeader sx={combinedStyles}>{children}</SytledCardHeader>
  );
};

const StyledCardTitle = styled.h3<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
`;
const cardTitleStyle: CSSObject = {
  fontSize: "1.5rem",
  fontWeight: 600,
  lineHeight: "1",
  letterSpacing: "-0.025em",
};

export const CardTitle: React.FC<CardProps> = ({ children, sx }) => {
  return (
    <StyledCardTitle sx={{ ...cardTitleStyle, ...(sx as CSSObject) }}>
      {children}
    </StyledCardTitle>
  );
};

const cardDescriptionStyles: CSSObject = {
  fontSize: "0.875rem",
  color: "#898991",
  marginTop: "6px",
};

const StyledCardDescription = styled.p<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
`;

export const CardDescription: React.FC<CardProps> = ({ sx, children }) => {
  return (
    <StyledCardDescription
      sx={{ ...cardDescriptionStyles, ...(sx as CSSObject) }}
    >
      {children}
    </StyledCardDescription>
  );
};

const StyledCardContent = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
`;
const paddingStyle: CSSObject = {};

export const CardContent: React.FC<CardProps> = ({ sx, children }) => {
  return (
    <StyledCardContent sx={{ ...paddingStyle, ...(sx as CSSObject) }}>
      {children}
    </StyledCardContent>
  );
};
const cardFooterStyles: CSSObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
};

const StyledCardFooter = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
`;

export const CardFooter: React.FC<CardProps> = ({ sx, children }) => {
  return (
    <StyledCardFooter sx={{ ...cardFooterStyles, ...(sx as CSSObject) }}>
      {children}
    </StyledCardFooter>
  );
};
