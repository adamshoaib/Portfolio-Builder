import * as React from "react";
import Typography from "../atoms/Typography";
import Line from "../atoms/Line";
import ProjectCard from "../molecules/ProjectCard";
import Btn from "../atoms/Btn";

export default function Projects({ projectsData }) {
  const [projectList, setProjectList] = React.useState([]);
  const [showButton, setShowButton] = React.useState(true);
  const [displayButtons, setDisplayButtons] = React.useState(true);
  React.useEffect(() => {
    setProjects();
  }, []);

  const setProjects = () => {
    const dataLength = projectsData?.Project_List?.length || 0;
    if (dataLength > 2) {
      setProjectList(projectsData?.Project_List?.slice(0, 2));
    } else {
      setProjectList(projectsData?.Project_List);
      setDisplayButtons(false);
    }
  };

  const showLessProjects = () => {
    setProjects();
    setShowButton(true);
  };

  const showAllProjects = () => {
    setProjectList(projectsData?.Project_List);
    setShowButton(false);
  };

  return (
    <div id="project-root-container" className="project-root-container">
      <div className="project-root-header">
        <Typography className={"project-header"}>
          {projectsData?.header}
        </Typography>
        <Line />
      </div>
      <div>
        {projectList?.map((project, index) => {
          return <ProjectCard key={index} data={project} />;
        })}
      </div>
      {displayButtons && showButton && (
        <div className="project-showmore-button">
          <Btn
            color="primary"
            variant="contained"
            onClick={() => {
              showAllProjects();
            }}
            labelClassName="project-show-more"
          >
            Show More
          </Btn>
        </div>
      )}
      {displayButtons && !showButton && (
        <div className="project-showmore-button">
          <Btn
            color="primary"
            variant="contained"
            onClick={() => {
              showLessProjects();
            }}
            labelClassName="project-show-more"
          >
            Show Less
          </Btn>
        </div>
      )}
    </div>
  );
}
