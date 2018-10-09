import React from 'react';
import PropTypes from 'prop-types';

function deleteLastItem (props) {
  return(
        <button onClick={(event) => props.deleteLastItem(event)} disabled={props.noItemsFound}>
          Delete Last Item
        </button>
  )
}

deleteLastItem.propTypes = {
  noItemsFound: PropTypes.func.isRequired,
  deleteLastItem: PropTypes.func.isRequired,
}

export default deleteLastItem;