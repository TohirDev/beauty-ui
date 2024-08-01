import { forwardRef, useState } from "react";
import { cn } from "./lib/utils";
interface ICustomInput {
    className?: string;
}
export const CustomInput = forwardRef<HTMLInputElement, ICustomInput>(
    ({ className, ...props }, ref) => {
        return (
            <input
                className={cn("bg-red-500", className)}
                placeholder="mther"
                ref={ref}
                {...props}
            />
        );
    },
);
