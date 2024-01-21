import * as React from "react";
import Typography from "../atoms/Typography";
import Line from "../atoms/Line";
import VerifiedIcon from "@mui/icons-material/Verified";
import Icon from "../atoms/Icon";
import Btn from "../atoms/Btn";

const CertificateCard = ({ data }) => {
  return (
    <>
      <div
        onClick={() => {
          window.open(data.link, "_blank");
        }}
        className="certificate-card-container"
      >
        <div className="certificate-card-logo-container">
          <div>
            <img
              className="certificate-card-logo"
              src={data.logo}
              alt="My Icon"
            />
          </div>
          <div>
            <Icon className="tool-bar-icon" size="30">
              <VerifiedIcon />
            </Icon>
          </div>
        </div>
        <div className="certificate-card-details">
          <Typography className={"certificate-card-name"}>
            {data.name}
          </Typography>
          <Typography className={"certificate-card-detail"}>
            {data.programName}
          </Typography>
          <Typography className={"certificate-card-detail"}>{`Issued on ${
            data.date
          } ${
            data.expires ? ` \u00A0 . \u00A0 Expires ${data.expires}` : ""
          }`}</Typography>
          <Typography className={"certificate-card-detail"}>{``}</Typography>
          <Typography
            className={"certificate-card-detail"}
          >{`Credential Id ${data.cid}`}</Typography>
        </div>
      </div>
    </>
  );
};

export default function Certificate({ certificatesData }) {
  const [certificateList, setCertificateList] = React.useState([]);
  const [showButton, setShowButton] = React.useState(true);
  React.useEffect(() => {
    setCertificates();
  }, []);

  const setCertificates = () => {
    const dataLength = certificatesData?.certificates?.length || 0;
    if (dataLength > 4) {
      setCertificateList(certificatesData?.certificates?.slice(0, 4));
    } else {
      setCertificateList(certificatesData?.certificates);
    }
  };

  const showLessProjects = () => {
    setCertificates();
    setShowButton(true);
  };

  const showAllProjects = () => {
    setCertificateList(certificatesData?.certificates);
    setShowButton(false);
  };
  return (
    <>
      <div className="skills-root-header">
        <Typography className={"title-heading"}>
          {certificatesData?.header}
        </Typography>
        <Line />
      </div>
      <div>
        <div className="certificate-root-container">
          {certificateList?.map((certificate) => {
            return <CertificateCard data={certificate} />;
          })}
        </div>
      </div>
      {certificateList.length > 4 && showButton && (
        <div className="project-showmore-button">
          <Btn
            color="primary"
            variant="contained"
            onClick={() => {
              showAllProjects();
            }}
            labelClassName="project-show-more"
            buttonClassName="button-show-more"
          >
            Show More
          </Btn>
        </div>
      )}
      {certificateList.length > 4 && !showButton && (
        <div className="project-showmore-button">
          <Btn
            color="primary"
            variant="contained"
            onClick={() => {
              showLessProjects();
            }}
            buttonClassName="button-show-more"
            labelClassName="project-show-more"
          >
            Show Less
          </Btn>
        </div>
      )}
    </>
  );
}
