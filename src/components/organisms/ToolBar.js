import * as React from "react";
import Btn from "../atoms/Btn";
import Icon from "../atoms/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Splitter from "../atoms/Splitter";
import CodeIcon from "@mui/icons-material/Code";
import { Typography } from "@mui/material";

export default function ToolBar({ toolbarData, changeSelection, selected }) {
  const scrollToTarget = (target) => {
    const targetSection = document.getElementById(target);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onLinkedInClick = () => {
    window.open(toolbarData?.linkedInUrl, "_blank");
  };

  const onInstagramClick = () => {
    window.open(toolbarData?.instaGramUrl, "_blank");
  };

  const onGitHubClickOne = () => {
    window.open(toolbarData?.gitHubUrl, "_blank");
  };

  return (
    <div className="toolbar-root-container">
      <div>
        {toolbarData?.logoLetters ? (
          <Typography className={"logo-toolbar"}>
            {toolbarData?.logoLetters}
          </Typography>
        ) : (
          <Icon color={"#4883e9"} mr={2}>
            <CodeIcon />
          </Icon>
        )}
      </div>

      <div className="toolbar-links-container">
        <div className="toolbar-links-one">
          <Btn
            onClick={() => changeSelection("Home")}
            labelClassName="tool-bar-Label"
          >
            HOME
          </Btn>
          <Btn
            onClick={() => changeSelection("About")}
            labelClassName="tool-bar-Label"
          >
            ABOUT ME
          </Btn>
          {selected === "Home" && (
            <Btn
              onClick={() => {
                scrollToTarget("project-root-container");
              }}
              labelClassName="tool-bar-Label"
            >
              PROJECTS
            </Btn>
          )}
          <Btn
            onClick={() => {
              window.open(toolbarData?.resumeLink, "_blank");
            }}
            labelClassName="tool-bar-Label"
          >
            RESUME
          </Btn>
        </div>
        <Splitter />
        <div className="toolbar-links-two">
          {toolbarData?.linkedInUrl && (
            <Icon
              onClick={() => {
                onLinkedInClick();
              }}
              mr={2}
            >
              <LinkedInIcon />
            </Icon>
          )}
          {toolbarData?.gitHubUrl && (
            <Icon
              onClick={() => {
                onGitHubClickOne();
              }}
              mr={2}
            >
              <GitHubIcon />
            </Icon>
          )}
          {toolbarData?.instaGramUrl && (
            <Icon
              onClick={() => {
                onInstagramClick();
              }}
              mr={2}
            >
              <InstagramIcon />
            </Icon>
          )}
        </div>
      </div>
    </div>
  );
}
