import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Line from "../atoms/Line";
import Typography from "../atoms/Typography";

export default function Experience({ experienceData }) {
  return (
    <>
      <div className="skills-root-header">
        <Typography className={"project-header"}>{"Experience"}</Typography>
        <Line />
      </div>
      {experienceData &&
        experienceData.experienceList &&
        experienceData.experienceList.map((company, index) => {
          let align = index % 2 === 0 ? "right" : "left";
          let alignText =
            index % 2 === 0 
              ? "experience-content-card-root-right"
              : "experience-content-card-root-left";

          return (
            <>
              <div className="experience-desktop-main">
                <Timeline className="timeline-desktop" position={align}>
                  <TimelineItem>
                    <TimelineOppositeContent sx={{ m: "auto 0" }}>
                      <Typography className={"experience-company-heading"}>
                        {company.companyName}
                      </Typography>
                      <Typography className={"experience-company-designation"}>
                        {company.designation}
                      </Typography>
                      <Typography className={"experience-company-designation"}>
                        {company.date}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot>
                        <img
                          className="experience-logo"
                          src={company.logo}
                          alt="My Icon"
                        />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      className={`${alignText}`}
                      sx={{ py: "12px", px: 2 }}
                    >
                      <div className="experience-content-card">
                        {company.description.map((description) => {
                          return (
                            <Typography className="experience-content">
                              {description}
                            </Typography>
                          );
                        })}
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div> 
              <div className="experience-mobile-main">
                <div className="experience-mobile-root">
                  <div className="experience-content-card-mobile">
                    <div className="experience-mobile-container">
                      <div className="experience-mobile-image">
                        <img
                          className="experience-logo-mobile"
                          src={company.logo}
                          alt="My Icon"
                        />
                      </div>
                      <div>
                        <Typography className={"experience-company-heading"}>
                          {company.companyName}
                        </Typography>
                        <Typography
                          className={"experience-company-designation"}
                        >
                          {company.designation}
                        </Typography>
                        <Typography
                          className={"experience-company-designation"}
                        >
                          {company.date}
                        </Typography>
                      </div>
                    </div>

                    <div>
                      <div className="">
                        {company.description.map((description) => {
                          return (
                            <Typography className="experience-content">
                              {description}
                            </Typography>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
