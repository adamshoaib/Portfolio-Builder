import * as React from "react";
import Icon from "../atoms/Icon"; 
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer({ footerData }) {
  const onLinkedInClick = () => {
    window.open(footerData?.linkedInUrl, "_blank");
  };

  const onEmailIdClick = () => {
    window.open(`mailto:${footerData.emailId}`, "_blank");
  };

  return (
    <div className="footer-root-container">
      <div className="footer-links-two">
        {footerData?.linkedInUrl && (
          <Icon
            onClick={() => {
              onLinkedInClick();
            }}
            className="tool-bar-icon"
            mr={2}
          >
            <LinkedInIcon />
          </Icon>
        )}
        {footerData?.emailId && (
          <Icon
            onClick={() => {
              onEmailIdClick();
            }}
            className="tool-bar-icon"
            mr={2}
          >
            <EmailIcon />
          </Icon>
        )}
      </div>
    </div>
  );
}
