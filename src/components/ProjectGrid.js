import React from "react";
import ProjectCard from "./ProjectCard";

import "./ProjectGrid.css";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="Project-grid">
      Projects List:
      {projects.map(project => {
        return (
          <ProjectCard
            title={project.title}
            description={project.descripton}
            image={project.image}
            url={project.url}
          />
        );
      })}
    </div>
  );
};

export default ProjectGrid;
