import React from 'react'
import PropTypes from 'prop-types'

class BodyRow extends React.Component {
  render() {
    return <tr>{this.props.children}</tr>
  }
}

BodyRow.propTypes = {
  children: PropTypes.any
}

export default BodyRow