/**
 * Created by Shubham Singh on 29/03/19.
 */
import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./shared/ProjectData";

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
      <div className="uk-container uk-text-center projects">
        <div className="uk-grid">{this.getProjectCards()}</div>
        <div className="uk-padding-small" />
      </div>
    );
  }
}

export default ProjectList;
