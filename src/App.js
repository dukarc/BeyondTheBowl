import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ProjectGrid from "./components/ProjectGrid";

import { projects } from "./store.js";

export default () => (
  <div className="App">
    <MuiThemeProvider>
      <Header />
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
