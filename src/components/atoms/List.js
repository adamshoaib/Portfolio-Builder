import * as React from "react";
import Button from "@mui/material/Button";

export default function List(props) {
  return (
    <>
      <ul>
        {props.data.map((text, index) => (
          <li className="list-text" key={index}>{text}</li>
        ))}
      </ul>
    </>
  );
}
