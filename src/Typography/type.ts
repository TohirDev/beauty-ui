import { PropsWithChildren } from "react";
import { CSSProp } from "styled-components";

export interface TextPros extends PropsWithChildren {
  className?: string;
  variant: "h1" | "h2" | "h3" | "h4" | "large" | "small" | "muted";
  sx?: CSSProp;
}
