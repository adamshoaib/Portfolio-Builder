import * as React from "react";
import Typography from "../atoms/Typography";
import Timeline from "./Timeline";
import GitHubCalender from "./GitHubCalender";

export default function AboutMe({ aboutMeData, timeLineData, githubData }) {
  return (
    <div className={"aboutme-container"}>
      <Typography className={"title-heading"}>{aboutMeData?.header}</Typography>
      <div className="about-me-root">
        {aboutMeData?.myPicture && (
          <div className="about-me-image">
            <img
              className="about-me-image"
              src={aboutMeData?.myPicture}
              alt="My Icon"
            />
          </div>
        )}
        <div className="about-me-content">
          {aboutMeData?.details?.map((detail) => {
            return (
              <Typography className={"about-me-para"}>{detail}</Typography>
            );
          })}
        </div>
      </div>
      {timeLineData && timeLineData.timeLineImage && (
        <Timeline timeLineData={timeLineData} />
      )}
      {githubData && <GitHubCalender githubData={githubData} />}
    </div>
  );
}
