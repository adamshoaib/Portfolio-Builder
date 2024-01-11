import * as React from "react";

export default function Typography(props) {
  return (
    <p className={`typography-style ${props.className}`} style={props.style}>
      {props.children}
    </p>
  );
}
