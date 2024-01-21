import * as React from "react";
import Typography from "../atoms/Typography";
import Line from "../atoms/Line";
import GitHubCalendar from "react-github-calendar";

export default function GitHubCalender({ githubData }) {
  return (
    <div className="git-hub-calender-container">
      <div className="project-root-header">
        <Typography className={"project-header"}>
          {githubData?.header}
        </Typography>
        <Line />
      </div>
      <div className="github-contributions">
        <GitHubCalendar username={githubData.userName} />
      </div>
    </div>
  );
}
