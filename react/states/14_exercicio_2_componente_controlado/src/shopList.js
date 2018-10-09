import React from 'react';
import ListItem from './listItem.js'
import PropTypes from 'prop-types';

function shopList (props) {
  return(
    <ol className="item-list">
        {props.items.map((item, index) => <ListItem item={item} index={index} />)}
    </ol>
  )
}

shopList.propTypes = {
  items: PropTypes.array.isRequired
}

export default shopList