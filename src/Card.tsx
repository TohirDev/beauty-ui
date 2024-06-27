import styled, {
  CSSObject,
  CSSProp,
  CSSProperties,
} from "styled-components";
import { convertToCss } from "./utils/styleUtils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  sx?: CSSProp | CSSObject;
}

const StyledCard = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

const cardStyle: CSSProperties = {
  borderRadius: "0.5rem",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#d1d5db", // Adjust as necessary
  backgroundColor: "#f8fafc", // Adjust as necessary
  color: "#1f2937", // Adjust as necessary
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  width: "500px",
  padding: "10px",
};

export const Card: React.FC<CardProps> = ({ children, sx }) => {
  const combinedStyles = { ...cardStyle, ...(sx as CSSObject) };
  return <StyledCard sx={combinedStyles}>{children}</StyledCard>;
};

const cardHeaderStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  marginTop: "0.375rem", // 1.5 * 0.25rem = 0.375rem
};

const SytledCardHeader = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && convertToCss(sx as CSSObject)}
`;

export const CardHeader: React.FC<CardProps> = ({ children, sx }) => {
  const combinedStyles = { ...cardHeaderStyles, ...(sx as CSSObject) };
  return (
    <SytledCardHeader sx={combinedStyles}>{children}</SytledCardHeader>
  );
};
