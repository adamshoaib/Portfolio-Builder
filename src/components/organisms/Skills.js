import * as React from "react";
import Typography from "../atoms/Typography";
import Line from "../atoms/Line";

const SkillCard = ({ skill }) => {
  return (
    <div className="skillcard-container">
      <div>
        <img className="skillcard-logo" src={skill.logo} alt="My Icon" />
      </div>
      <div>
        <p className="skillcard-name">{skill.name}</p>
      </div>
    </div>
  );
};
export default function Skills({ skillsData }) {
  return (
    <div className="skills-root-container">
      <div className="skills-root-header">
        <Typography className={"title-heading"}>
          {skillsData?.skillHeader}
        </Typography>
        <Line />
      </div>
      <div className="skills-root-sub-container">
        {skillsData?.skillsList?.map((skill, index) => {
          return <SkillCard key={index} skill={skill} />;
        })}
      </div>
    </div>
  );
}
