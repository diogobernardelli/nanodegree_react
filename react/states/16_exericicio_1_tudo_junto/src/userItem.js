import React from 'react';
import PropTypes from 'prop-types';

/*
We can make this a Stateless Functional Component because this element doesn't
need to hold its own state.
*/
const UserItem = props => {
  //return JSX
  return (
    <li className="user">
      <p>Username: {props.user.username}</p>
      <p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
    </li>
  );
};

UserItem.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserItem;
