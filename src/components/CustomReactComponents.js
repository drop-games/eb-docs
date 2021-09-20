import React from "react";

function TextStyled({
  children,
  color = "inherit",
  fontSize = "inherit",
  fontWeight = "inherit",
  fontStyle = "inherit",
  fontFamily = "inherit",
  lineHeight = "inherit",
  textShadow = "inherit",
  textTransform = "inherit",
  textDecoration = "inherit",
}) {
  return (
    <span
      style={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        fontFamily: fontFamily,
        lineHeight: lineHeight,
        textShadow: textShadow,
        textTransform: textTransform,
        textDecoration: textDecoration,
      }}
    >
      {children}
    </span>
  );
}

export default TextStyled;
