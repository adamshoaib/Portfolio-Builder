import * as React from "react";

export default function Splitter({ className, props, children }) {
  return (
    <>
      <span className={`splitter ${className}`}>|</span>
    </>
  );
}
