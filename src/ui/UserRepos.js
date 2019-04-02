import React from "react";
import PropTypes from "prop-types";

const UserRepos = ({ name, bio, repositories, hideScreen }) => 
<div className="user-repos">
  <div className="close" onClick={hideScreen}></div>
  <div className="name">{name}</div>
  <p className={`bio${!bio ? ' is-empty' : ''}`}>{bio || 'no bio'}</p>
  <span>User repos:</span>
  <ul className="list">
    { repositories.map( ({name, url}) =>
      <li className="list-item" key={url}>
            <a className="list-item__link" href={url}>{name}</a>
      </li> 
    )}
    
  </ul>
  <style jsx>{`
    .user-repos {
      position: relative;
    }
    .name {
      font-size: 1.2em;
    }
    .bio {
      opacity: .7;
      font-style: italic;

    }
    .close {
      width: .5rem;
      height: .5rem;
      border: none;
      border-radius: 50%;
      background: white;
      color: black;
      padding: .5em .5em;
      position: absolute;
      left: -2rem;
      top: -2rem;
      cursor: pointer;
    }
    .close:before {
      position: absolute;

      content: 'x';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  `}</style>
</div>;

UserRepos.propTypes = {
  name: PropTypes.string.isRequired,
  hideScreen: PropTypes.func.isRequired
};

export default UserRepos;