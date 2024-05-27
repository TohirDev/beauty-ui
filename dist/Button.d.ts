import React from "react";
import { CSSObject, CSSProp } from "styled-components";
interface ButtonProps {
    variant: "text" | "contained" | "outlined";
    children?: React.ReactNode;
    customStyle?: CSSProp | CSSObject;
}
export declare const Button: React.FC<ButtonProps>;
export {};
