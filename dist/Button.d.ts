import React from "react";
import { CSSObject, CSSProp } from "styled-components";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "link" | "default" | "outlined" | "primary" | "danger";
    children?: React.ReactNode;
    sx?: CSSProp | CSSObject;
}
export declare const Button: React.FC<ButtonProps>;
export {};
