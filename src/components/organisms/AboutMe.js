import * as React from "react";
import Typography from "../atoms/Typography";

export default function AboutMe({ aboutMeData }) {
  return (
    <>
      <Typography className={"title-heading"}>{aboutMeData?.header}</Typography>
      <div className="about-me-root">
        <div className="about-me-image">
          <img
            className="about-me-image"
            src={aboutMeData?.myPicture}
            alt="My Icon"
          />
        </div>
        <div className="about-me-content">
          {aboutMeData?.details?.map((detail) => {
            return (
              <Typography className={"about-me-para"}>{detail}</Typography>
            );
          })}
        </div>
      </div>
    </>
  );
}
