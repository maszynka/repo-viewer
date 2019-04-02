import React from "react";
import PropTypes from "prop-types";

const UserRepos = ({ name, bio, repositories, hideScreen }) => 
<div className="user-repos">
  <span className="user-repos__close" onClick={hideScreen}>close</span>
  <div className="user-repos__name">{name}</div>
  <p className={`user-repos__bio${!bio ? 'is-empty' : ''}`}>{bio}</p>
  <ul className="user-repos__list">
    { repositories.map( ({name, url}) =>
      <li className="user-repos__list__item" key={url}>
            <a className="user-repos__list__item" href={url}>{name}</a>
      </li> 
    )}
    
  </ul>
</div>;

UserRepos.propTypes = {
  name: PropTypes.string.isRequired,
  hideScreen: PropTypes.func.isRequired
};

export default UserRepos;