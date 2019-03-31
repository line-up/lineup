import React from "react";
import { StyledText } from "../Primitives";
import { useTheme } from "../../../themes";

export function Heading({ tag = "h4", ...props }) {
  const theme = useTheme();
  return <StyledText as={tag} theme={theme} {...props} />;
}
