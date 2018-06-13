import React from 'react';

const SystemSelect = ({ systems }) => {
  const options = systems.map(system => (
    <option id={system._id} key={system._id}>{system.name}</option>
  ));
  options.unshift(<option id="0">New System</option>);

  return (
    <div>
      <select id="project-select">
        {options}
      </select>
      <button type="button" id="project-load">Load</button>
    </div>
  );
};

export default SystemSelect;
