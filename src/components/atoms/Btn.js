import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export default function Btn({
  children,
  variant = "text",
  color = "inherit",
  onClick = null,
  backgroundColor,
  labelClassName,
  buttonClassName,
  style = {},
  disabled = false,
}) {
  return (
    <>
      <Button
        disabled={disabled}
        variant={variant}
        sx={{
          color: "black",
          textTransform: "none",
          backgroundColor: backgroundColor,
          ...style,
        }}
        className={buttonClassName}
        color={color}
        onClick={onClick}
      >
        <span className={labelClassName}>{children}</span>
      </Button>
    </>
  );
}
