import React from 'react';
import { Link } from 'react-router';

const ProjectTile = ({ id, name, description }) => {
    return(
      <div className="row">
        <div className="project small-9 small-centered columns">
          <h2 className="text-center"><Link to={`/projects/${id}`}> {name} </Link></h2>
          <h3>Description: {description} </h3>
        </div>
      </div>
    )
  }

export default ProjectTile;
