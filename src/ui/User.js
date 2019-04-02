import React from "react";
import PropTypes from "prop-types";

const User = ({ name, onClick, login }) => 
<div>
  <span onClick={(event) => onClick(event, login)}>{name}</span>  
</div>;

User.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

// Same approach for defaultProps too

export default User;