import { CSSObject, css, Interpolation } from "styled-components";

export const convertToCss = (style: CSSObject): Interpolation<any> =>
  css(style);
