import React from "react";
import { CSSObject, CSSProp } from "styled-components";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "text" | "contained" | "outlined";
    children?: React.ReactNode;
    sx?: CSSProp | CSSObject;
}
export declare const Button: React.FC<ButtonProps>;
export {};
