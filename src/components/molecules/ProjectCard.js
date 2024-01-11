import * as React from "react";
import Typography from "../atoms/Typography";
import List from "../atoms/List";
import Btn from "../atoms/Btn";
import OvalChip from "../atoms/OvalChip";
import LockIcon from "@mui/icons-material/Lock";
import Icon from "../atoms/Icon";

export default function ProjectCard({ data }) {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const onLogoClicked = () => {
    if (data?.logoLink) window.open(data?.logoLink, "_blank");
  };
  return (
    <div className="project-card-root-container">
      <div className="project-card-info">
        <Typography className="project-card-project-name">
          {data?.name}
        </Typography>
        {data?.subtitle && (
          <Typography className="project-card-project-subtitle">
            {data?.subtitle}
          </Typography>
        )}
        <Typography className="project-card-project-date">
          {data?.date}
        </Typography>
        <Typography className="project-card-project-overview">
          {data?.overview}
        </Typography>
        <Typography className="project-card-key-contributions">
          Key Contributions
        </Typography>
        <Typography className="project-card-key-contributions-description">
          <List data={data?.contributions} />
        </Typography>
        <div className="project-card-tech-chips">
          {data?.technologies.map((tech, index) => {
            return (
              <>
                <OvalChip key={index} label={tech} />
              </>
            );
          })}
        </div>
        {data?.projectLink && (
          <Btn
            onClick={() => {
              handleClick(data?.projectLink);
            }}
            backgroundColor="white"
            variant="outlined"
            style={{ marginRight: "1rem", marginBottom: "0.2rem" }}
          >
            View Project Details
          </Btn>
        )}
        {data?.websitelink && (
          <Btn
            onClick={() => {
              handleClick(data?.websitelink);
            }}
            backgroundColor="white"
            variant="outlined"
          >
            View Website
          </Btn>
        )}
        {data?.isPrivate && (
          <div className="project-card-private-container">
            <div>
              <Icon size="small">
                <LockIcon />
              </Icon>
            </div>
            <div>
              <Typography className="project-card-private-text">
                {data?.privateMessage
                  ? data?.privateMessage
                  : "This Project is private and cannot be viewed or explained in detail."}
              </Typography>
            </div>
          </div>
        )}
      </div>
      {data?.logo && (
        <div
          onClick={() => {
            onLogoClicked();
          }}
          className="project-card-image"
        >
          <img
            className={data?.logoRound ? "project-logo-round" : "project-logo"}
            src={data?.logo}
            alt="My Icon"
          />
        </div>
      )}
    </div>
  );
}
