import styled, { css, CSSObject, CSSProp } from "styled-components";
import { TextPros } from "./type";

export const StyledText = styled.p<{
  variant: TextPros["variant"];
  $sx?: CSSProp;
}>`
  ${({ $sx }) => $sx && css($sx as CSSObject)}
  ${({ variant }) => {
    switch (variant) {
      case "h1":
        return css`
          font-size: 50px;
          font-weight: bold;
          &:hover {
            color: red;
          }
        `;
      case "h2":
        return css`
          font-size: 40px;
          font-weight: bold;
        `;
      case "h3":
        return css`
          font-size: 30px;
          font-weight: bold;
        `;
      case "h4":
        return css`
          font-size: 30px;
          font-weight: bold;
        `;
      case "large":
        return css`
          font-size: 20px;
        `;
      case "small":
        return css`
          font-size: 14px;
          color: red;
        `;
      case "muted":
        return css`
          font-size: 14px;
          color: #6c757d;
        `;
      default:
        return "";
    }
  }}
`;
