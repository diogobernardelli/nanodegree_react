import React from 'react';
import PropTypes from 'prop-types';

function listItem (props) {
  return(
	<li key={props.index}>{props.item}</li>
  )
}

listItem.PropTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
}

export default listItem;