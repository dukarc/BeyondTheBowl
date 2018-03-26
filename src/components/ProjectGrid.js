import React from "react";
import { Card, CardMedia, CardTitle } from "material-ui/Card";

import "./ProjectGrid.css";

const ProjectGrid = ({ projects }) => {
  return projects.map(project => {
    return (
      <div className="Project-grid">
        <ProjectCard
          title={project.title}
          description={project.descripton}
          image={project.image}
          url={project.url}
        />
      </div>
    );
  });
};

export default ProjectGrid;
