/**
 * Created by Shubham Singh on 29/03/19.
 */
import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./shared/ProjectData";
import Footer from "./footer";

const ProjectDataArr = ProjectData;

class ProjectList extends Component {
  getProjectCards() {
    let cardArray = [];

    for (let i = 0; i < ProjectDataArr.length; i++) {
      cardArray.push(<ProjectCard key={i} cardData={ProjectDataArr[i]} />);
    }

    return cardArray;
  }

  render() {
    return (
      <>
        <div className="container uk-text-center projects">
          <h2 className="page-title uk-text-bold uk-text-uppercase color-grey-54">
            Projects
          </h2>
          <div className="uk-grid">{this.getProjectCards()}</div>
          <div className="uk-padding-small" />
        </div>
        <Footer />
      </>
    );
  }
}

export default ProjectList;
