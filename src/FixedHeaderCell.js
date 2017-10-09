import React from 'react'
import PropTypes from 'prop-types'

const FixedHeaderCell = props => (
  <th style={{ width: props.width }}>{props.children}</th>
);

FixedHeaderCell.propTypes = {
  style: PropTypes.object,
  width: PropTypes.number,
  children: PropTypes.any
}

export default FixedHeaderCell