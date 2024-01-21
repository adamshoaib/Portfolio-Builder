import * as React from "react";
import Typography from "../atoms/Typography";
import Line from "../atoms/Line";

export default function Timeline({ timeLineData }) {
  return (
    <div className="timeline-container">
      <div className="project-root-header">
        <Typography className={"project-header"}>
          {timeLineData?.header}
        </Typography>
        <Line />
      </div>
      <div className="timeline-root-container">
        <img
          className="timeline-img"
          src={timeLineData?.timeLineImage}
          alt="My Icon"
        />
      </div>
    </div>
  );
}
