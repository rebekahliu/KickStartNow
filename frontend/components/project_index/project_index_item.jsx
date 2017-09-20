import React from 'react';

const ProjectIndexItem = ({project}) => {
  return(
    <ul>
      <li>{project.title}</li>
      <li>{project.description}</li>
    </ul>
  );
};

export default ProjectIndexItem;
