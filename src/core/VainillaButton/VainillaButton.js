import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 *<strong>Native Button</strong><br/>
 * Build with javascript
 *
 */

const VainillaButton = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>;
};

VainillaButton.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
};

export default VainillaButton;
