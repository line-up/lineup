import React from "react";
import styled from "@emotion/styled";
import {
  //Base
  space,
  width,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign,
  lineHeight,
  letterSpacing,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  verticalAlign,
  // Grid
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridArea,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  //Flex
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  flexBasis,
  //background
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  //Misc,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
  overflow,
  borders,
  // Position
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  // Misc
  buttonStyle,
  textStyle,
  colorStyle,
  variant
} from "styled-system";

export const StyledBase = styled("div")(
  space,
  width,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign,
  lineHeight,
  letterSpacing,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  verticalAlign,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
  overflow,
  borders
);

export const StyledBackground = styled(StyledBase)(
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat
);

export const StyledGrid = styled("div")(
  {
    display: "grid"
  },
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridArea,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  space
);

export const StyledFlex = styled("div")(
  {
    display: "flex"
  },
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  flexBasis,
  space,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight
);

export const StyledButton = styled("button")(
  {
    cursor: "pointer"
  },
  borders,
  borderRadius,
  buttonStyle,
  space,
  fontSize,
  variant,
  height,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  color
);

export const StyledText = styled("p")(
  color,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign,
  lineHeight,
  letterSpacing,
  space,
  textStyle
);
