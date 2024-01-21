import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function OvalChip({ label }) {
  return (
    <Stack className="oval-chip" direction="row" spacing={1}>
      <Chip className="oval-chip-label" label={label} />
    </Stack>
  ); 
}
