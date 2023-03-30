import React from "react";
import PropTypes from 'prop-types';

export const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};


Filter.protoType = {
  value: PropTypes.string.isRequired,
  changeFilter:PropTypes.func.isRequired,
}