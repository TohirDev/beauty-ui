import styled, { css, CSSObject, CSSProp } from "styled-components";
interface ILabelProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  sx?: CSSProp;
  children: React.ReactNode;
}

const StyledLabel = styled.div<{
  sx?: CSSProp;
}>`
  ${({ sx }) => sx && css(sx as CSSObject)}
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
