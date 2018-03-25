import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ProjectCard from "./components/ProjectCard";
import "./style/App.css";

import { projects } from "./store.js";

export default () => (
  <div className="App">
    <MuiThemeProvider>
      {projects.map(project => {
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
      })}
    </MuiThemeProvider>
  </div>
);
