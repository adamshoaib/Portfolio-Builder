import * as React from "react";
import Btn from "../atoms/Btn";
import Icon from "../atoms/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Splitter from "../atoms/Splitter";
import CodeIcon from "@mui/icons-material/Code";
import { Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeSwitch from "../molecules/ThemeSwitch";

export default function ToolBar({
  toolbarData,
  changeSelection,
  selected,
  themeChanged,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <Icon color={"#4883e9"} className="tool-bar-icon" mr={2}>
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
          {selected === "Home" && (
            <>
              <Btn
                onClick={() => {
                  scrollToTarget("skills-root-container");
                }}
                labelClassName="tool-bar-Label"
              >
                SKILLS
              </Btn>

              <Btn
                onClick={() => changeSelection("About")}
                labelClassName="tool-bar-Label"
              >
                ABOUT ME
              </Btn>

              <Btn
                onClick={() => {
                  scrollToTarget("project-root-container");
                }}
                labelClassName="tool-bar-Label"
              >
                PROJECTS
              </Btn>
            </>
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
              className="tool-bar-icon"
            >
              <LinkedInIcon />
            </Icon>
          )}
          {toolbarData?.gitHubUrl && (
            <Icon
              onClick={() => {
                onGitHubClickOne();
              }}
              className="tool-bar-icon"
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
              className="tool-bar-icon"
              mr={2}
            >
              <InstagramIcon />
            </Icon>
          )}
          <ThemeSwitch
            themeChanged={(e) => {
              themeChanged(e);
            }}
          />
        </div>
      </div>

      <div className="hamburger-toolbar">
        <ThemeSwitch
          themeChanged={(e) => {
            themeChanged(e);
          }}
        />
        <Icon className="tool-bar-icon" onClick={handleClick}>
          <MenuIcon />
        </Icon>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              changeSelection("Home");
            }}
            className="dropdown-menu"
          >
            HOME
          </MenuItem>
          {selected === "Home" && (
            <MenuItem
              onClick={() => {
                handleClose();
                scrollToTarget("skills-root-container");
              }}
            >
              SKILLS
            </MenuItem>
          )}
          {selected === "Home" && (
            <MenuItem
              onClick={() => {
                handleClose();
                changeSelection("About");
              }}
            >
              ABOUT ME
            </MenuItem>
          )}
          {selected === "Home" && (
            <MenuItem
              onClick={() => {
                handleClose();
                scrollToTarget("project-root-container");
              }}
            >
              PROJECTS
            </MenuItem>
          )}
          <MenuItem
            onClick={() => {
              handleClose();
              window.open(toolbarData?.resumeLink, "_blank");
            }}
          >
            RESUME
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
