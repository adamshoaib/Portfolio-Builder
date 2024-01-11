import * as React from "react";
import IconButton from "@mui/material/IconButton";

export default function Icon({
  children,
  color = "black",
  onClick,
  size = "large",
  mr = 0,
}) {
  return (
    <>
      <IconButton
        onClick={onClick}
        size={size}
        edge="start"
        aria-label="menu"
        sx={{ mr: mr, color: color }}
      >
        {children}
      </IconButton>
    </>
  );
}
