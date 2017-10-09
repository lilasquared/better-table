import React from 'react'
import PropTypes from 'prop-types'

class Body extends React.Component {
  render() {
    return <tbody>{this.props.children}</tbody>
  }
}

Body.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
}

export default Body