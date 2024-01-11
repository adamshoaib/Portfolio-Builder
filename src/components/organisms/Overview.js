import * as React from "react";
import Typography from "../atoms/Typography";

export default function Overview({ overviewData }) {
  return (
    <div className="overview-root-container">
      <div className="overview-root-sub-container">
        <div className="overview-info">
          <Typography className={"overview-welcome"}>
            {overviewData?.intro}
          </Typography>
          <Typography
            className={"overview-name"}
            style={{
              width: `${overviewData?.name?.length}ch`,
              animation: `typing 2s steps(${overviewData?.name?.length}), blink 0.5s step-end infinite alternate`,
            }}
          >
            {overviewData?.name}
          </Typography>
          <Typography className={"overview-summary"}>
            {overviewData?.summaryHeader}
          </Typography>
          <Typography className={"overview-summary"}>
            {overviewData?.summaryDetails.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
          <Typography className={"overview-summary-conclusion"}>
            {overviewData?.conclusion}
          </Typography>
        </div>
      </div>
    </div>
  );
}
