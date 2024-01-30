import React from "react";
import "../styles/components/maincontent.sass";
import AboutContainer from '../components/AboutContainer'
import ProjectsContainer from '../components/ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer';
const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjectsContainer/>
    </main>
  );
};
export default MainContent;
