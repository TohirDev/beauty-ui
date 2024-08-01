import { ElementType, forwardRef } from "react";
import { StyledText } from "./StyledText";
import { TextPros } from "./type";

const elementMapping: Record<string, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  large: "p",
  small: "p",
  muted: "span",
};

export const Text = forwardRef<Text, TextPros>(
  ({ children, className, variant, sx }, ref) => {
    const Component = elementMapping[variant] || "p";
    return (
      <StyledText
        as={Component}
        ref={ref}
        className={className}
        variant={variant}
        $sx={sx}
      >
        {children}
      </StyledText>
    );
  }
);

Text.displayName = "Text";
