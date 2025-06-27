import { useState } from 'react';
import React from 'react';
import projects from '../data/projects.json';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "All",
        };
        this.filters = ["All", ...Array.from(new Set(projects.map(p => p.category))).sort()];;
    }
    onSelectFilter = (filter) => {
        this.setState({ selected: filter });
    };
    render(){
        const { selected } = this.state;

        const filteredProjects = selected === "All"
        ? projects
        : projects.filter(project => project.category === selected);

        return (
            <>
              <Toolbar
                filters={this.filters}
                selected={selected}
                onSelectFilter={this.onSelectFilter}
              />
              <ProjectList projects={filteredProjects} />
            </>
          );
    }
}