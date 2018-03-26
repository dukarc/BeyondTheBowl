import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";

import Header from "./components/Header";
import ProjectGrid from "./components/ProjectGrid";

import { projects } from "./store.js";

export default () => (
  <div className="App">
    <MuiThemeProvider>
      <Header />
      <ProjectGrid projects={projects} />
    </MuiThemeProvider>
  </div>
);
