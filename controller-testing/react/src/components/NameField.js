import React from 'react';

const NameField = props => {
  return(
    <label>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleChange}
      />
    </label>
  )
}

export default NameField
